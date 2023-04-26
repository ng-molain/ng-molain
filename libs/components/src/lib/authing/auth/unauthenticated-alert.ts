import {Injectable} from "@angular/core";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {AsyncSubject, EMPTY, interval, Observable} from "rxjs";
import {take} from "rxjs/operators";
import {isFunction} from "lodash-es";

@Injectable()
export class UnauthenticatedAlert {

  private alterConfirmModal?: NzModalRef;

  constructor(private modalService: NzModalService) {
  }

  public open(waitSeconds: number = 10): Observable<boolean> {
    if (this.alterConfirmModal) {
      return EMPTY;
    }

    const subject = new AsyncSubject<boolean>();
    const firstWaitText = waitSeconds > 0 ? `(${waitSeconds}秒)` : '';
    const modalRef = this.alterConfirmModal = this.modalService.confirm({
      nzTitle: '未认证或认证已失效！',
      nzContent: '你当前会话未认证或已失效，请重新登录后继续操作！',
      nzOnOk: () => {
        subject.next(true);
        subject.complete();
        this.alterConfirmModal = undefined;
      },
      nzOkText: `去登录...${firstWaitText}`,
      nzCancelText: null,
      nzClosable: false
    });

    if (waitSeconds > 0) {
      interval(1000).pipe(take(waitSeconds)).subscribe({
        next: value => {
          if (value >= waitSeconds - 1) {
            modalRef.triggerOk();
          }
          modalRef.updateConfig({
            nzOkText: `去登录...(${waitSeconds - value}秒)`
          })
        }
      });
    }

    return subject.asObservable();
  }
}
