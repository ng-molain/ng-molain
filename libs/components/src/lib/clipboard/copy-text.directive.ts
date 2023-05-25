import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, fromEvent, mergeMap, Subscription} from "rxjs";
import {NzMessageService} from "ng-zorro-antd/message";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {copyTextToClipboard} from "../utils";

@Directive({
  selector: '[mlCopyText]'
})
export class CopyTextDirective implements OnInit, OnDestroy {

  @Input("mlCopyText") text!: string;

  private subscription?: Subscription;

  constructor(private el: ElementRef,
              private messageService: NzMessageService) { }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'click').pipe(
      debounceTime(1000),
      mergeMap(() => fromPromise(copyTextToClipboard(this.text)))
    ).subscribe({
        next: value => {
          this.messageService.success("复制成功");
        },
        error: err => {
          // this.messageService.error('复制失败，请手工选择文本后右键复制');
        }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
