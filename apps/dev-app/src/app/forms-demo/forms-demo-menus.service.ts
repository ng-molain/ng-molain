import {ViewFrameworkProductService} from "@ng-molain/components";
import {Injectable} from "@angular/core";

@Injectable()
export class FormsDemoMenusService implements ViewFrameworkProductService{

  collapsed: boolean = false;

  getMenus() {
    return [
      {text: '通用表单', link: 'simple-form'},
      {text: '设置表单', link: 'setting-form'},
    ];
  }

}
