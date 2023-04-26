import {HttpContextToken} from "@angular/common/http";
import {InjectionToken} from "@angular/core";

export class AuthHeaders {
  static readonly AUTHORIZATION = "Authorization";
}

export const ANONYMOUS = new HttpContextToken<boolean>(() => false);

export interface AuthService {
  isAuthenticated(): Promise<boolean>;

  checkAuthenticate({authenticated, unauthenticated}: {
    authenticated?: () => void,
    unauthenticated?: () => void
  }): Promise<boolean>;

  toLogin(): Promise<void>;
}

export const AUTH_SERVICE = new InjectionToken<AuthService>("AUTH_SERVICE");
