import {InjectionToken} from "@angular/core";

export interface UnauthenticatedHandler {
  onUnauthenticated(): Promise<void>;
}

export const UNAUTHENTICATED_HANDLER = new InjectionToken<UnauthenticatedHandler>("UNAUTHENTICATED_HANDLER");
