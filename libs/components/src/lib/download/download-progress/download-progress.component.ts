import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'ml-download-progress',
  templateUrl: './download-progress.component.html',
  styleUrls: ['./download-progress.component.scss']
})
export class DownloadProgressComponent  {

  @ViewChild("progressTpl") progressTpl!: TemplateRef<any>;

}
