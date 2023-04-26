import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UnauthenticatedAlert} from "./unauthenticated-alert";
import {HTTP_INTERCEPTORS, HttpInterceptor} from "@angular/common/http";
import {AUTHORIZATION_HEADER_PROVIDER} from "./authorization-header-provider";
import {AuthorizationHeaderInterceptor} from "./authorization-header-interceptor";
import {UNAUTHENTICATED_HANDLER} from "./unauthenticated-handler";
import {UnauthenticatedInterceptor} from "./unauthenticated-interceptor";
import {NzModalModule} from "ng-zorro-antd/modal";
import {AuthGuard} from "./auth-guard";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzModalModule,
  ],
  providers: [
    UnauthenticatedAlert,
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizationHeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: UnauthenticatedInterceptor, multi: true},
    AuthGuard
  ]
})
export class AuthModule { }
