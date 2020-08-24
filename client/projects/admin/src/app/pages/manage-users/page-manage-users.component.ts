import { AdminService } from './../../shared/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { format as dateFormat } from 'date-fns';

declare const require: any;

@Component({
  selector: 'app-page-manage-users',
  templateUrl: './page-manage-users.component.html',
  styleUrls: ['./page-manage-users.component.scss']
})
export class PageManageUsersComponent implements OnInit {

  getAllUsersRes;
  rows:any[] = [];
  cols = [
    "First Name",
    "Middle Name",
    "Last Name",
    "Emails",
    "",
  ];

  pageindex = 1;
  pagelength = 10;

  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    this.getAllUsers(this.pageindex, this.pagelength);
  }
  getAllUsers(pageindex, pagelength) {
    this.adminservice.getAllUsers(pageindex, pagelength).subscribe(res => {
      this.getAllUsersRes = JSON.parse(JSON.stringify(res));
      console.log('====res', res, Array.isArray((this.getAllUsersRes || {}).users));
      this.rows = (this.getAllUsersRes || {}).users || [];
    });
  }
}
