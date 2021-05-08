import { InjectionToken } from '@angular/core';

export interface ViewFrameworkProductService {
    collapsed: boolean;
    getMenus();

    onInit?();
    onDestroy?();
}

export const VIEW_FRAMEWORK_PRODUCT_SERVICE = new InjectionToken<ViewFrameworkProductService>("VIEW_FRAMEWORK_PRODUCT_SERVICE");