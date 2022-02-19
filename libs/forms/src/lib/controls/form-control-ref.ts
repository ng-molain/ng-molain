import {ViewContainerRef} from "@angular/core";
import {FormControlContext} from "./form-control-renderer.component";


export abstract class FormControlRef {
  abstract get container(): ViewContainerRef;
  abstract get context(): FormControlContext;

  constructor() {}
}
