import {AfterViewInit, Component, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Page, Pageable, Pagination} from "../../../pagination";
import {USER_LOADER, UserLoader} from "../../user-lookup.typings";
import {isNil, omitBy} from "lodash-es";
import {ColumnDef, SimpleTableComponent} from "../../../simple-table";
import {OrgUnitTreeComponent} from "../../../org-unit";
import {startWith} from "rxjs/operators";
import {debounceTime} from "rxjs";
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'ml-user-lookup-find',
  templateUrl: './user-lookup-find.component.html',
  styleUrls: ['./user-lookup-find.component.scss']
})
export class UserLookupFindComponent implements OnInit, AfterViewInit {

  @ViewChild(OrgUnitTreeComponent) orgUnitTreeComponent!: OrgUnitTreeComponent;

  searchForm: FormGroup;
  tableColumns: ColumnDef[] = [
    {title: '用户名', name: 'username'},
    {title: '姓名', name: 'name'},
    {title: '邮箱', name: 'email'},
    // {title: '所属组织', name: 'orgName'},
  ];
  pageList: Pagination<any> = Page.noop();
  fetching = false;

  @ViewChild(SimpleTableComponent) tableComponent!: SimpleTableComponent

  constructor(fb: FormBuilder,
              private modalRef: NzModalRef,
              @Optional() @Inject(USER_LOADER) private userLoader?: UserLoader) {
    this.searchForm = fb.group({
      searchText: [],
      withChildGroup: [],
      permissions: ['SYSTEM:USER:VIEW'],

      // "site.id": [],
      // "userGroup.id": [],
      scope: [],

      page: [],
      size: [],
    })
  }

  ngOnInit() {
    // this.fetchList();
    this.searchForm.valueChanges.pipe(
      startWith(this.searchForm.value),
      debounceTime(200)
    ).subscribe({
      next: value => {
        this.fetchList({page: 0});
      }
    });
  }

  ngAfterViewInit() {
    this.orgUnitTreeComponent.selectionChange.asObservable().subscribe({
      next: value => {
        if (!value || Array.isArray(value)) {
          return ;
        }
        this.searchForm.patchValue({scope: value});
      }
    });
  }

  fetchList(pageable?: Partial<Pageable>) {
    if (pageable) {
      this.searchForm.patchValue(pageable, {emitEvent: false});
    }

    const params = omitBy(this.searchForm.value, isNil);
    this.fetching = true;
    this.userLoader?.userList(params).subscribe({
      next: value => {
        this.fetching = false;
        this.pageList = value;
      },
      error: () => {
        this.fetching = false;
      }
    });
  }

  getSelected() {
    return this.tableComponent.getSelected();
  }
}
