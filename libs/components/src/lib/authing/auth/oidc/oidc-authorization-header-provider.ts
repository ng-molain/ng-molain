import {AuthorizationHeaderProvider} from "../authorization-header-provider";
import {from, mergeMap, Observable, of} from "rxjs";
import {HttpRequest} from "@angular/common/http";
import {OidcAuthService} from "./oidc-auth.service";
import {map} from "rxjs/operators";
import {set} from "lodash-es";
import {AuthHeaders} from "../auth.typings";


export class OidcAuthorizationHeaderProvider implements AuthorizationHeaderProvider {

  constructor(private oidcAuthService: OidcAuthService) {
  }

  resolveHeaders(): Observable<{ [name: string]: string | string[] }> {
    return from(this.getUser()).pipe(
      map(user => user && !user.expired ? user.access_token : null),
      map(token => {
        const headers = {};
        if (token) {
          set(headers, AuthHeaders.AUTHORIZATION, "Bearer " + token);
        }
        return headers;
      })
    );
  }

  support(req: HttpRequest<any>): boolean {
    return true;
  }

  private getUser() {
    const userManager = this.oidcAuthService.getUserManager();
    if (!userManager) {
      return Promise.resolve(null);
    }

    return userManager.getUser();
  }

}
