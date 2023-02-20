
export interface FormSubmitEvent<T = any> {
  source: T;
  event: SubmitEvent;
  form: FormGroup;
}
