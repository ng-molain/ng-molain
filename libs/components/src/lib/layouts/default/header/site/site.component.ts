import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-header-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  sites = [
    { name: '根站点', shortName: 'root-site' },
    { name: '子站点A', shortName: 'sub-site-a' },
    { name: '子站点B', shortName: 'sub-site-b' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
