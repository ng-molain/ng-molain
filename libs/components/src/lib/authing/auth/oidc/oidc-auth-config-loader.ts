import {UserManager, UserManagerSettings, WebStorageStateStore} from "oidc-client-ts";
import {Observable, of} from "rxjs";
import {InjectionToken} from "@angular/core";
import {tap} from "rxjs/operators";
import {HttpClient, HttpContext} from "@angular/common/http";
import {mapKeys, merge, snakeCase} from "lodash-es";
import {ANONYMOUS} from "../auth.typings";

export interface OidcAuthConfig {
  settings: UserManagerSettings
}

export interface OidcAuthConfigLoader {
  getConfig(): Observable<OidcAuthConfig>;
}

export const OIDC_AUTH_CONFIG_LOADER = new InjectionToken<OidcAuthConfigLoader>('OIDC_AUTH_CONFIG_LOADER');

const DEFAULT_CONFIG: Partial<OidcAuthConfig> = {
  settings: {
    response_type: 'code',
    scope: 'openid',
    userStore: new WebStorageStateStore({
      store: localStorage
    })
  } as UserManagerSettings
};

export class LocalOidcAuthConfigLoader implements OidcAuthConfigLoader {
  private config: OidcAuthConfig;

  constructor(config: OidcAuthConfig) {
    this.config = merge({}, DEFAULT_CONFIG, config);
  }

  getConfig(): Observable<OidcAuthConfig> {
    return of(this.config);
  }
}


export interface HttpOidcAuthConfigLoaderOptions {
  url: string;
  overrides?: {
    settings?: Partial<UserManagerSettings>
  }
}

export class HttpOidcAuthConfigLoader implements OidcAuthConfigLoader {
  config?: OidcAuthConfig;

  constructor(private httpClient: HttpClient,
              private options: HttpOidcAuthConfigLoaderOptions) {
  }

  getConfig(): Observable<OidcAuthConfig> {
    if (this.config) {
      return of(this.config);
    }

    return this.fetchConfig().pipe(
      tap({
        next: value => {
          this.config = merge({}, DEFAULT_CONFIG, value);
        }
      })
    );
  }

  private fetchConfig() {
    return this.httpClient.get<OidcAuthConfig>(this.options.url, {
      context: new HttpContext().set(ANONYMOUS, true)
    }).pipe(
      tap(value => {
        const {settings} = value;
        value.settings = mapKeys(settings, (v, k) => snakeCase(k)) as any;
        const overrides = this.options.overrides;
        if (!overrides) {
          return ;
        }
        merge(value, overrides);
      })
    );
  }

}
