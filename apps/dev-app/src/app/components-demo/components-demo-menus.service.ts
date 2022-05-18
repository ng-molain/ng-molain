import {ViewFrameworkProductService} from "@ng-molain/components";
import {Injectable} from "@angular/core";

@Injectable()
export class ComponentsDemoMenusService implements ViewFrameworkProductService {

  collapsed: boolean = false;

  getMenus() {
    return [
      {text: '组织单位', link: 'orgUnit'},
      {
        text: '数据显示', children: [
          {text: '简单数据表', link: 'simpleTable'},
        ]
      },
      {
        text: 'AngDesign官网', link: 'https://ng.ant.design/'
      }
    ];
  }

}
