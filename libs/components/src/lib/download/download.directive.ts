import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {debounceTime, fromEvent, mergeMap, Observable, Subscription} from "rxjs";
import {HttpEvent, HttpEventType} from "@angular/common/http";
import {NzNotificationRef, NzNotificationService} from "ng-zorro-antd/notification";
import {downloadFile, tryGetFilename} from "../utils";
import {CdkPortalOutlet, ComponentPortal} from "@angular/cdk/portal";
import {DownloadProgressComponent} from "./download-progress/download-progress.component";

@Directive({
  selector: '[mlDownload]'
})
export class DownloadDirective implements OnInit, OnDestroy {
  portalOutlet: CdkPortalOutlet;

  @Input("mlDownload") req$!: Observable<HttpEvent<Blob>>;

  subscription?: Subscription;
  filename?: string;
  notifyRef?: NzNotificationRef;
  data?: any;

  constructor(private notificationService: NzNotificationService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private el: ElementRef) {
    this.portalOutlet = new CdkPortalOutlet(componentFactoryResolver, viewContainerRef);
  }

  ngOnInit() {
    const componentPortal = new ComponentPortal(DownloadProgressComponent);
    const componentRef = this.portalOutlet.attachComponentPortal(componentPortal);

    this.subscription = fromEvent(this.el.nativeElement, 'click')
      .pipe(
        debounceTime(1000),
        mergeMap(() => this.req$)
      )
      .subscribe({
        next: event => {
          if (event.type === HttpEventType.ResponseHeader) {
            this.filename = tryGetFilename(event.headers);
          }
          if (event.type === HttpEventType.DownloadProgress) {
            // console.log(event.total, event.loaded);
            const data = {
              name: this.filename,
              loaded: event.loaded,
              total: event.total,
              percent: event.total ? (event.loaded * 100 / event.total) : undefined
            };
            if (this.data) {
              Object.assign(this.data, data);
            } else {
              this.data = data;
            }
            // TODO 显示文件大小
            if (!this.notifyRef) {
              this.notifyRef = this.notificationService.template(componentRef.instance.progressTpl, {
                nzDuration: 0,
                nzData: this.data
              });
            }
          }
          if (event.type === HttpEventType.Response) {
            downloadFile(event);
            this.data = undefined;
            const msgId = this.notifyRef?.messageId;
            setTimeout(() => {
              this.notificationService.remove(msgId);
            }, 2000);
            this.notifyRef = undefined;
          }
        },
        error: err => {
          this.data = undefined;
          this.notifyRef = undefined;
        }
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
