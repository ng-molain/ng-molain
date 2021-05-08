import {Component, Input, OnInit} from '@angular/core';
import { DefaultLayoutService } from '../default-layout.service';
import {HeaderInfo, MenuItem} from "./header/header.typings";

@Component({
  selector: 'ml-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class LayoutDefaultComponent implements OnInit {

  @Input() headerInfo: HeaderInfo;
  @Input() mainMenu: MenuItem[] = [];

  constructor(public readonly layoutService: DefaultLayoutService) { }

  get sidebarCollapsed(): boolean {
    return true;
    // return this.layoutService.sidebarCollapsed;
  }

  ngOnInit() {
  }

}
