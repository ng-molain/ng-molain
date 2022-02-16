import {Component, Input, OnInit} from '@angular/core';
import { DefaultLayoutService } from '../../default-layout.service';
import {HeaderInfo, MenuItem} from "./header.typings";


@Component({
  selector: 'ml-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  @Input() headerInfo?: HeaderInfo;
  @Input() mainMenu: MenuItem[] = [];

  constructor(public readonly layoutService: DefaultLayoutService) { }

  ngOnInit() {
    if (!this.headerInfo) {
      this.headerInfo = {
        homeUrl: '/',
        appName: 'NG-MOLAIN'
      };
    }
  }

  toggleSidebar() {
    this.layoutService.toggleSidebarCollapsed();
  }
}
