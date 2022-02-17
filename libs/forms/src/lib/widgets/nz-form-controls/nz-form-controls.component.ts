import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlDirective} from "./form-control.directive";
import {filter, first, Observable, startWith, Subject} from "rxjs";

/**
 * @deprecated 这种方式虽然减少了组件文件的创建，但是扩展性并不是很好
 */
@Component({
  selector: 'ml-nz-form-controls',
  templateUrl: './nz-form-controls.component.html',
  styleUrls: ['./nz-form-controls.component.scss']
})
export class NzFormControlsComponent implements OnInit, AfterViewInit {

  formControl: FormControl = new FormControl();

  @ViewChildren(FormControlDirective) formControls!: QueryList<FormControlDirective>;

  private afterViewInit$ = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  get afterViewInit(): Observable<any> {
    return this.afterViewInit$.pipe(
      startWith(this.formControls),
      filter(it => !!it),
    );
  }

  ngAfterViewInit() {
    console.log(this.formControls.length, this.formControls.map(it => it.name));
    this.afterViewInit$.next(this.formControls);
  }

}
