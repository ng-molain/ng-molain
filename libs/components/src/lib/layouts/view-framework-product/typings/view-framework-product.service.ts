import {InjectionToken} from '@angular/core';

export interface ViewFrameworkProductService {
  collapsed: boolean;
  title?: boolean;
  iconBaseClassName?: string;

  getMenus(): any[];

  onInit?(): void;

  onDestroy?(): void;
}

export const VIEW_FRAMEWORK_PRODUCT_SERVICE = new InjectionToken<ViewFrameworkProductService>("VIEW_FRAMEWORK_PRODUCT_SERVICE");
