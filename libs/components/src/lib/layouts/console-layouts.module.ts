import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";

import { LayoutDefaultComponent } from './default/default.component';
import { LayoutPassportComponent } from './passport/passport.component';
import { LayoutHeaderComponent } from './default/header/header.component';
import { LayoutSidebarComponent } from './default/sidebar/sidebar.component';
import { LayoutSiteComponent } from './site/site.component';
import { LayoutSiteHeaderComponent } from './site/site-header/site-header.component';
import { LayoutSiteFooterComponent } from './site/site-footer/site-footer.component';
import { TaskComponent } from './default/header/task/task.component';
import { MessageComponent } from './default/header/message/message.component';
import { AcountComponent } from './default/header/acount/acount.component';
import { HelpComponent } from './default/header/help/help.component';
import { SiteComponent } from './default/header/site/site.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzListModule} from "ng-zorro-antd/list";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {IconDefinition} from "@ant-design/icons-angular";

import {MenuFoldOutline, MenuUnfoldOutline, UserOutline} from "@ant-design/icons-angular/icons";
import {CommonModule} from "@angular/common";
import {HelpDialogModule} from "../help-dialog";
import {HttpClientModule} from "@angular/common/http";

const icons: IconDefinition[] = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  UserOutline,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    HelpDialogModule,
    TranslateModule,
    NzLayoutModule,
    NzDividerModule,
    NzDropDownModule,
    NzAvatarModule,
    NzBadgeModule,
    NzTabsModule,
    NzListModule,
    NzTagModule,
    NzButtonModule,
    NzIconModule.forChild(icons)
  ],
  declarations: [
    LayoutDefaultComponent,
    LayoutPassportComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LayoutSiteComponent,
    LayoutSiteHeaderComponent,
    LayoutSiteFooterComponent,
    TaskComponent,
    MessageComponent,
    AcountComponent,
    HelpComponent,
    SiteComponent,
  ],
  exports: [
    LayoutDefaultComponent,
    LayoutPassportComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LayoutSiteComponent,
    LayoutSiteHeaderComponent,
    LayoutSiteFooterComponent,
  ]
})
export class ConsoleLayoutsModule {}
