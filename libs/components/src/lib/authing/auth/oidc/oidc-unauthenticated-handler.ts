import {UnauthenticatedHandler} from "../unauthenticated-handler";
import {OidcAuthService} from "./oidc-auth.service";
import {UnauthenticatedAlert} from "../unauthenticated-alert";
import {firstValueFrom} from "rxjs";

export class OidcUnauthenticatedHandler implements UnauthenticatedHandler {

  constructor(private oidcAuthService: OidcAuthService,
              private unauthenticatedAlert: UnauthenticatedAlert) {
  }

  onUnauthenticated(): Promise<void> {
    const alert$ = this.unauthenticatedAlert.open();
    return firstValueFrom(alert$).then(it => {
      it && this.oidcAuthService.toLogin();
    });
  }

}
