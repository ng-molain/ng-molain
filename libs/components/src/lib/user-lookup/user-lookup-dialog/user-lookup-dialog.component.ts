import {Component, OnInit, ViewChild} from '@angular/core';
import {UserLookupFindComponent} from "./user-lookup-find/user-lookup-find.component";
import {UserLookupFastComponent} from "./user-lookup-fast/user-lookup-fast.component";
import {User} from "../user-lookup.typings";

@Component({
  selector: 'ml-user-lookup-dialog',
  templateUrl: './user-lookup-dialog.component.html',
  styleUrls: ['./user-lookup-dialog.component.scss']
})
export class UserLookupDialogComponent implements OnInit {
  selectedIndex = 0;

  @ViewChild(UserLookupFindComponent) findComponent!: UserLookupFindComponent;
  @ViewChild(UserLookupFastComponent) fastComponent!: UserLookupFastComponent;

  constructor() { }

  ngOnInit() {
  }

  getSelected(): User[] | undefined {
    if (this.selectedIndex === 0) {
      return this.fastComponent.getSelected();
    }
    if (this.selectedIndex === 1) {
      return this.findComponent.getSelected();
    }
    return ;
  }

}
