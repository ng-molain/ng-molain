import {NzRadioService} from "ng-zorro-antd/radio";
import {Directive, forwardRef, OnInit} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {AbstractControlValueAccessor} from "@ng-molain/forms";


@Directive({
  selector: "[mlRadioGroup]",
  providers:[{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioGroupDirective), multi: true
  },
    NzRadioService
  ],
})
export class RadioGroupDirective extends AbstractControlValueAccessor implements OnInit{

  constructor(private radioService: NzRadioService) {
    super();
  }

  ngOnInit() {
    this.radioService.selected$.subscribe({
      next: value => {
        this.onChange(value);
      }
    });
  }

  override writeValue(obj: any) {
    super.writeValue(obj);
    if (obj) {
      this.radioService.select(obj);
    } else {
      this.radioService.select(null);
    }
  }

}
