import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DefaultLayoutService {
    sidebarCollapsed: boolean = false;
    
    private _sidebarMenus: any[] = [];
    sidebarMenus: Observable<any[]>;

    private _sidebarMenus$ = new Subject<any[]>();

    constructor() {
        this.sidebarMenus = this._sidebarMenus$.asObservable();
    }

    public toggleSidebarCollapsed() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }

    public expandSidebar() {
        this.sidebarCollapsed = false;
    }

    public collapseSidebar() {
        this.sidebarCollapsed = true;
    }

    public setSidebarMenus(menus) {
        this._sidebarMenus = menus;
        this._sidebarMenus$.next(this._sidebarMenus);
    }
}