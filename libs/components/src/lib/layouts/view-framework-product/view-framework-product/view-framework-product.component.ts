import { Component, OnInit, Inject, Optional, OnDestroy } from '@angular/core';
import { VIEW_FRAMEWORK_PRODUCT_SERVICE, ViewFrameworkProductService } from '../typings/view-framework-product.service';
import { ActivatedRoute } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {get, has, isArray, isEmpty, isFunction} from "lodash-es";

@Component({
  selector: 'ml-view-framework-product',
  templateUrl: './view-framework-product.component.html',
  styleUrls: ['./view-framework-product.component.scss']
})
export class ViewFrameworkProductComponent implements OnInit, OnDestroy {

  menus: any[] = [];

  constructor(
    @Optional() private translateService: TranslateService,
    @Inject(VIEW_FRAMEWORK_PRODUCT_SERVICE) @Optional() public readonly vfService: ViewFrameworkProductService,
    private route: ActivatedRoute,
  ) {
    // if (!vfService) {
    // console.log("must provide ViewFrameworkProductService")
    // }
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      let menus = [];
      if (has(data, 'productMenu')) {
        menus = get(data, 'productMenu')
      } else if (this.vfService) {
        menus = this.vfService.getMenus();
        // console.log(menus)
      } else {
        console.warn("Must provide ViewFrameworkProductService or provide data: {productMenu: Menu[]} in route.")
      }

      if (!isEmpty(menus)) {
        this._parseMenu(menus);
      }
    });

    // TODO： 在routeData中设置回调函数，不过意义可能不大，操作性不强，需要手动把一些参数传入回调函数，如（injector）
    if (this.vfService && isFunction(this.vfService.onInit)) {
      this.vfService.onInit();
    }
  }

  ngOnDestroy() {
    if (this.vfService && isFunction(this.vfService.onDestroy)) {
      this.vfService.onDestroy();
    }
  }

  private _parseMenu(menus: any[]) {
    visit(menus, (it, level) => {
      it.name = !!it.i18n && this.translateService.instant(it.i18n) !== it.i18n ? (this.translateService.instant(it.i18n)) : it.text;
      it.route = it.link;
      it.level = level;
      it.type = it.group ? 'group' : (has(it, 'children') ? 'submenu' : 'menuitem')
    });
    this.menus = menus;
  }

}

function visit(nodes: any[], callback: (node: any, level: number) => void = () => { }, level: number = 0, deepInBy: string = 'children') {
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
