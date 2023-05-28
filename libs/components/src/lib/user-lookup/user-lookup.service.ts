import {Injectable} from '@angular/core';
import {NzModalRef, NzModalService} from 'ng-zorro-antd/modal';
import {UserLookupDialogComponent} from './user-lookup-dialog/user-lookup-dialog.component';
import {Subject} from "rxjs";
import {User} from "./user-lookup.typings";

@Injectable()
export class UserLookupService {

  constructor(
    private readonly modalService: NzModalService
  ) {
  }

  openLookup() {
    const subject = new Subject<User[]>();
    this.modalService.create({
      // nzTitle: '选择用户',
      nzContent: UserLookupDialogComponent,
      nzWidth: 1000,
      nzMaskClosable: false,
      nzOnOk: instance => {
        const selected = instance.getSelected();
        if (selected) {
          subject.next(selected);
        }
        subject.complete();
      }
    });

    return subject.asObservable();
  }
}
