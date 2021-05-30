import {ViewFrameworkProductService} from "@ng-molain/components";
import {Injectable} from "@angular/core";

@Injectable()
export class ComponentsDemoMenusService implements ViewFrameworkProductService{

  collapsed: boolean;

  getMenus() {
    return [
      {text: '组织单位', link: 'orgUnit'}
    ];
  }

}
