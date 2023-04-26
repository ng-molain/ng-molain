import {Inject, Injectable, Optional} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {UNAUTHENTICATED_HANDLER, UnauthenticatedHandler} from "./unauthenticated-handler";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class UnauthenticatedInterceptor implements HttpInterceptor {

  constructor(@Inject(UNAUTHENTICATED_HANDLER) @Optional() private unauthenticatedHandler: UnauthenticatedHandler) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.unauthenticatedHandler) {
      return next.handle(req);
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err && err.status === 401) {
          this.unauthenticatedHandler.onUnauthenticated();
        }
        throw err;
      })
    );
  }

}
