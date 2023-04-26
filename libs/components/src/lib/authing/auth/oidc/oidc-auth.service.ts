import {Inject, Injectable} from "@angular/core";
import {OIDC_AUTH_CONFIG_LOADER, OidcAuthConfig, OidcAuthConfigLoader} from "./oidc-auth-config-loader";
import {firstValueFrom, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {UserManager} from "oidc-client-ts";
import {isFunction} from "lodash-es";
import {AuthService} from "../auth.typings";


@Injectable()
export class OidcAuthService implements AuthService {

  private config?: OidcAuthConfig;
  private userManager?: UserManager;

  constructor(@Inject(OIDC_AUTH_CONFIG_LOADER) private configLoader: OidcAuthConfigLoader) {
  }

  public getUserManager(): UserManager | undefined {
    return this.userManager;
  }

  public applicationInitialize(): Promise<boolean> {
    const config$ = this.configLoader.getConfig().pipe(
      tap({
        next: (config) => {
          this.config = config;

          const {settings} = config;
          this.userManager = new UserManager(settings);
          this.registerEvents();
        },
        error: err => {
          // Error on application init
        }
      }),
      catchError(err => {
        console.error("Oidc auth service init error.", err);
        return of(null);
      }),
      map((value) => {
        return !!this.userManager;
      })
    );

    return firstValueFrom(config$);
  }

  private registerEvents() {
    // TODO support custom events  ...

    // required event
    this.userManager?.events.addUserSignedOut(() => {
      // 清除登录记录
      this.userManager?.removeUser().then(() => {
        // TODO 根据不同的情况做不同的动作，跳转到登录页、跳转到首页、弹出登录框、刷新页面 等
        // ...
      });
    })
  }

   public isAuthenticated(): Promise<boolean> {
    if (!this.userManager) {
      return Promise.resolve(false);
    }

    return this.userManager.getUser().then(it => {
      return !!it && !it.expired;
    });
  }


  public checkAuthenticate({authenticated, unauthenticated}: {
    authenticated?: () => void,
    unauthenticated?: () => void
  }) {
    return this.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated && isFunction(authenticated)) {
        authenticated();
      }
      if (!isAuthenticated && isFunction(unauthenticated)) {
        unauthenticated();
      }
      return isAuthenticated;
    });
  }

  public toLogin() {
    if (!this.userManager) {
      throw new Error('Invalid oidc client settings');
    }

    return this.userManager.signinRedirect();
  }

}
