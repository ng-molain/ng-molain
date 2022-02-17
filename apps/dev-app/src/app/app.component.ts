import { Component } from '@angular/core';
import {MenuItem} from "@ng-molain/components";

@Component({
  selector: 'ng-molain-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dev-app';

  mainMenu: MenuItem[] = [
    {
      link: '/demo/components',
      text: '组件'
    },
    {
      link: '/documents',
      text: '文档'
    },
    {
      link: '/demo/forms',
      text: '表单'
    }
  ];
}
