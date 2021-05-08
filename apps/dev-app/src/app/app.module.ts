import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ConsoleLayoutsModule} from "@ng-molain/components";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    ConsoleLayoutsModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
