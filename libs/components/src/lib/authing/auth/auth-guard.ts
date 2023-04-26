import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Inject, Injectable, Optional} from "@angular/core";
import {firstValueFrom, Observable} from "rxjs";
import {AUTH_SERVICE, AuthService} from "./auth.typings";
import {UnauthenticatedAlert} from "./unauthenticated-alert";
import {UNAUTHENTICATED_HANDLER, UnauthenticatedHandler} from "./unauthenticated-handler";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(@Inject(AUTH_SERVICE) private authService: AuthService,
              @Inject(UNAUTHENTICATED_HANDLER) @Optional() private unauthenticatedHandler: UnauthenticatedHandler) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthentication();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthentication();
  }

  private checkAuthentication() {
    return this.authService.checkAuthenticate({
      unauthenticated: () => {
        this.unauthenticatedHandler?.onUnauthenticated();
      }
    });
  }

}
