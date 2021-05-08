import { Component, OnInit } from '@angular/core';

// TODO: extra it
interface HeaderInfo {
  homeUrl: string;
  logo: string;
  miniLogo: string;
  appName: string;
}

@Component({
  selector: 'ml-layout-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss']
})
export class LayoutPassportComponent implements OnInit {

  headerInfo: HeaderInfo = {
    homeUrl: '/',
    logo: '/assets/images/logo.png',
    miniLogo: 'assets/images/mini-logo.png',
    appName: '企慕课堂'
  };

  constructor() { }

  ngOnInit() {
  }

}
