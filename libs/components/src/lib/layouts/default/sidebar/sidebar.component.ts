import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import {TranslateService} from "@ngx-translate/core";
import {DefaultLayoutService} from "../../default-layout.service";
import {get, has, isArray, isEmpty, isFunction} from "lodash-es";


@Component({
  selector: 'ml-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit, OnDestroy {

  menus: any = [];
  menusSubscription?: Subscription;

  constructor(
    // private applicationContext: ApplicationContext,
    private translateService: TranslateService,
    private layoutService: DefaultLayoutService,
  ) {
    // const menus = _.cloneDeep(applicationContext.systemInfo.menu);
    // visit(menus, (it, level) => {
    //   it.name = translateService.instant(it.i18n) || it.text;
    //   it.route = it.link;
    //   it.level = level;
    //   it.type = it.group ? 'group' : (_.has(it, 'children') ? 'submenu' : 'menuitem')
    // });
    // this.menus = menus;
  }

  ngOnInit() {
    this._clearSubscription();
    this.menusSubscription = this.layoutService.sidebarMenus.pipe(
      // startWith(this.applicationContext.systemInfo.menu)
    ).subscribe(newMenus => {
      // const menus = _.cloneDeep(_.isEmpty(newMenus) ? this.applicationContext.systemInfo.menu : newMenus);
      const menus = newMenus;

      visit(menus, (it, level) => {
        it.name = !!it.i18n && this.translateService.instant(it.i18n) !== it.i18n ?  this.translateService.instant(it.i18n) : it.text;
        it.route = it.link;
        it.level = level;
        it.type = it.group ? 'group' : (has(it, 'children') ? 'submenu' : 'menuitem')
      });
      this.menus = menus;
    });
  }

  ngOnDestroy() {
    this._clearSubscription();
  }

  private _clearSubscription() {
    if (this.menusSubscription) {
      this.menusSubscription.unsubscribe();
    }
  }

}

function visit(nodes: any[], callback: (node: any, level: number) => void = () => { }, level: number = 1, deepInBy: string = 'children') {
  const forIn = (_nodes: any[], _level: number = level) => {
    if (!isArray(_nodes) || isEmpty(_nodes) || !isFunction(callback)) {
      return;
    }

    _nodes.forEach(node => {
      callback(node, _level);

      if (!!deepInBy && has(node, deepInBy)) {
        const children = get(node, deepInBy);
        forIn(children, _level + 1);
      }
    });
  }

  forIn(nodes);
}
