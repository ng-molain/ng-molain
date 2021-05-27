import {EventEmitter, Injectable, TemplateRef} from '@angular/core';
import {NzModalService, NzModalRef} from 'ng-zorro-antd/modal';
import {OrgUnitLookupDialogComponent} from "./org-unit-lookup-dialog/org-unit-lookup-dialog.component";
import {OnClickCallback} from "ng-zorro-antd/modal/modal-types";
import {NzSafeAny} from "ng-zorro-antd/core/types";
import {isEmpty, isFunction} from "lodash-es";
import {OrgUnitLoader} from "./org-unit-loader";

export interface OrgUnitLookupOptions<T = NzSafeAny> {
  title?: string | TemplateRef<{}>;
  onOk?: EventEmitter<T> | OnClickCallback<T>;
  onCancel?: EventEmitter<T> | OnClickCallback<T>;
  isMultiple?: boolean;
};

const DEFAULT_OPTIONS = {
  title: '选择组织',
  isMultiple: false,
}

@Injectable()
export class OrgUnitLookupService {

  constructor(
    private readonly modalService: NzModalService,
    private readonly orgUnitLoader: OrgUnitLoader
  ) {
  }

  openLookup(_options?: OrgUnitLookupOptions): NzModalRef {
    const options = Object.assign({}, DEFAULT_OPTIONS, _options);

    const onOk = (comp: OrgUnitLookupDialogComponent) => {
      const _result = comp.selection.selected;
      const result = isEmpty(_result) ? _result : _result.map(it => {
        return {
          id: it.id,
          name: it.name
        }
      });

      if (options.onOk && isFunction(options.onOk)) {
        return options.onOk(result);
      } else if (options.onOk instanceof EventEmitter) {
        return options.onOk.emit(result);
      }

      return result;
    }

    const modalRef = this.modalService.create({
      nzTitle: options.title,
      nzContent: OrgUnitLookupDialogComponent,
      nzComponentParams: {
        multipleSelect: options.isMultiple,
        loadChildrenFn: this.orgUnitLoader.loadChildren
      },
      nzWidth: 720,
      nzMaskClosable: false,
      nzOnOk: (comp) => {
        return onOk(comp);
      }
    });

    return modalRef;
  }
}
