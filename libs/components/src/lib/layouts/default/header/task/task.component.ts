import { Component, OnInit } from '@angular/core';
import { TASKS } from './task-data';

const statusColor = {
  todo: undefined,
  processing: 'blue',
  urgent: 'red',
  doing: 'gold',
};

@Component({
  selector: 'ml-header-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  loading: boolean = false;
  tasks: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.tasks = TASKS.map((it: any) => {
        it.color = (statusColor as any)[it.status];
        return it;
      });
    }, 1000);

  }

}
