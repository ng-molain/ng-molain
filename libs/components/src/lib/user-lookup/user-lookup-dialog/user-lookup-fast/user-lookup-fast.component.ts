import { Component, OnInit } from '@angular/core';
import {User} from "../../user-lookup.typings";

@Component({
  selector: 'ml-user-lookup-fast',
  templateUrl: './user-lookup-fast.component.html',
  styleUrls: ['./user-lookup-fast.component.scss']
})
export class UserLookupFastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getSelected(): User[] {
    return [];
  }

}
