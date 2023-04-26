import {Log} from "oidc-client-ts";

export function enableDebug() {
  Log.setLogger(console);
  Log.setLevel(Log.DEBUG);
}
