import {FormGroup} from "@angular/forms";

export interface FormSubmitEvent<T = any> {
  source: T;
  event: SubmitEvent;
  form: FormGroup;
}
