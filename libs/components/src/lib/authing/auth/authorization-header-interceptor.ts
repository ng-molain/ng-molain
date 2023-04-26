import {Inject, Injectable, Optional} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AUTHORIZATION_HEADER_PROVIDER, AuthorizationHeaderProvider} from "./authorization-header-provider";
import {from, mergeMap, Observable} from "rxjs";
import {ANONYMOUS} from "./auth.typings";


@Injectable()
export class AuthorizationHeaderInterceptor implements HttpInterceptor {
  constructor(@Inject(AUTHORIZATION_HEADER_PROVIDER) @Optional() private authorizationHeaderProvider: AuthorizationHeaderProvider) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.authorizationHeaderProvider
      || !this.authorizationHeaderProvider.support(req)
      || req.context.get(ANONYMOUS)) {
      return next.handle(req);
    }

    return this.authorizationHeaderProvider.resolveHeaders().pipe(
      mergeMap(headers => {
        headers = headers ?? {};
        return next.handle(req.clone({
          setHeaders: headers
        }));
      })
    )
  }


}
