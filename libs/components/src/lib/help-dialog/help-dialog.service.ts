import { Injectable } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { HelpDialogComponent } from './help-dialog.component';

@Injectable()
export class HelpDialogService {

    modalRef: NzModalRef;

    constructor(
        private modalService: NzModalService
    ) { }

    open() {
        this.modalService.create({
            nzMask: false,
            nzContent: HelpDialogComponent,
            nzStyle: {
                position: 'absolute',
                right: '32px',
                top: 'unset',
                bottom: '0',
            }
        });
    }

    close() {
        this.modalRef.close();
    }
}
