import {APP_INITIALIZER, forwardRef, ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OidcCallbackComponent} from "./oidc-callback.component";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {OidcAuthService} from "./oidc-auth.service";
import {
  HttpOidcAuthConfigLoader,
  HttpOidcAuthConfigLoaderOptions, LocalOidcAuthConfigLoader,
  OIDC_AUTH_CONFIG_LOADER, OidcAuthConfig
} from "./oidc-auth-config-loader";
import {HttpClient} from "@angular/common/http";
import {enableDebug} from "./oidc-client.functions";
import {RouterModule} from "@angular/router";
import {AUTHORIZATION_HEADER_PROVIDER} from "../authorization-header-provider";
import {OidcAuthorizationHeaderProvider} from "./oidc-authorization-header-provider";
import {UNAUTHENTICATED_HANDLER} from "../unauthenticated-handler";
import {UnauthenticatedAlert} from "../unauthenticated-alert";
import {OidcUnauthenticatedHandler} from "./oidc-unauthenticated-handler";
import {AUTH_SERVICE} from "../auth.typings";


function authServiceInitializer(oidcAuthService: OidcAuthService) {
  return () => oidcAuthService.applicationInitialize();
}

function httpOidcAuthConfigLoaderFactory(options: HttpOidcAuthConfigLoaderOptions) {
  return (httpClient: HttpClient) => new HttpOidcAuthConfigLoader(httpClient, options);
}

function authorizationHeaderProviderFactory(oidcAuthService: OidcAuthService) {
  return new OidcAuthorizationHeaderProvider(oidcAuthService);
}

function unauthenticatedHandlerFactory(oidcAuthService: OidcAuthService,
                                       unauthenticatedAlert: UnauthenticatedAlert) {
  return new OidcUnauthenticatedHandler(oidcAuthService, unauthenticatedAlert);
}

const OIDC_COMMON_PROVIDERS: Provider[] = [
  OidcAuthService,
  {provide: AUTH_SERVICE, useExisting: forwardRef(() => OidcAuthService)},
  {provide: APP_INITIALIZER, useFactory: authServiceInitializer, multi: true, deps: [OidcAuthService]},
  {provide: AUTHORIZATION_HEADER_PROVIDER, useFactory: authorizationHeaderProviderFactory, deps: [OidcAuthService]},
  {provide: UNAUTHENTICATED_HANDLER, useFactory: unauthenticatedHandlerFactory, deps: [OidcAuthService, UnauthenticatedAlert]}
];


export interface OidcClientModuleConfig {
  configUrl?: string;
  config?: OidcAuthConfig;
  debug?: boolean;
}

@NgModule({
  declarations: [
    OidcCallbackComponent
  ],
  imports: [
    CommonModule,
    NzAlertModule,
    RouterModule.forChild([
      {path: 'auth', component: OidcCallbackComponent}
    ])
  ]
})
export class OidcClientModule {
  static forRoot(moduleConfig: OidcClientModuleConfig = {}): ModuleWithProviders<OidcClientModule> {
    const {configUrl, config, debug} = moduleConfig;

    const providers = [...OIDC_COMMON_PROVIDERS];
    if (configUrl) {
      const options: HttpOidcAuthConfigLoaderOptions = {
        url: configUrl,
        overrides: config
      };
      providers.push({
        provide: OIDC_AUTH_CONFIG_LOADER,
        useFactory: httpOidcAuthConfigLoaderFactory(options),
        deps: [HttpClient]
      });
    } else if (config) {
      providers.push({
        provide: OIDC_AUTH_CONFIG_LOADER,
        useValue: new LocalOidcAuthConfigLoader(config)
      });
    } // else user custom loader and provided outer

    if (debug) {
      enableDebug();
    }

    return {
      ngModule: OidcClientModule,
      providers: providers
    };
  }
}
