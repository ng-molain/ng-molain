import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";
import {HttpRequest} from "@angular/common/http";

export interface AuthorizationHeaderProvider {
  resolveHeaders(): Observable<{[name: string]: string | string[]}>;
  support(req: HttpRequest<any>): boolean;
}

export const AUTHORIZATION_HEADER_PROVIDER = new InjectionToken<AuthorizationHeaderProvider>("AUTHORIZATION_HEADER_PROVIDER");
