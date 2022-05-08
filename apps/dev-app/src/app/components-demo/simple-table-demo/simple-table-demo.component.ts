import {Component, OnInit} from '@angular/core';
import {booleanTransformer, enumTransformer, Page, Pagination} from "@ng-molain/components";

@Component({
  selector: 'ng-molain-simple-table-demo',
  templateUrl: './simple-table-demo.component.html',
  styleUrls: ['./simple-table-demo.component.scss']
})
export class SimpleTableDemoComponent implements OnInit {

  columns = [
    {title: '姓名', name: 'name', pinLeft: true},
    {title: '用户名', name: 'username'},
    {title: '别名/昵称', name: 'displayName'},
    {title: '手机号', name: 'phoneNumber', hidden: true},
    {title: '邮箱', name: 'emailAddress', hidden: true},
    {
      title: '状态', name: 'status', render: enumTransformer({
        ACTIVE: {text: '激活的', color: 'green'},
        LOCKED: {text: '已锁定', color: 'red'}
      })
    },
    {title: '是否内置', name: 'inbuilt', render: booleanTransformer({truly: '是的', falsely: '不是的'})}
  ];

  filters: any[] = [
    {key: "queryText", name: "用户名、姓名、手机号或邮箱", type: "input"},
    {key: "username", name: "用户名", type: "input"},
    {key: "fullName", name: "姓名", type: "input"},
    {key: "4", name: "所属单位", type: "orgUnitLookup", dataSource: ""},
    {key: "9", name: "创建人", type: "userLookup", dataSource: ""},
    {key: "10", name: "创建时间", type: "rangePicker", dataSource: ""},
  ];

  dataContent = [
    {id: '1', username: 'user001', displayName: 'User 001', status: 'ACTIVE', inbuilt: false},
    {id: '2', username: 'user002', displayName: 'User 001', inbuilt: true},
    {id: '3', username: 'user003', displayName: 'User 001', status: 'LOCKED'},
  ];

  data: Pagination = Page.of(0, 10, 109, this.dataContent);



  constructor() {
  }

  ngOnInit(): void {
  }

}
