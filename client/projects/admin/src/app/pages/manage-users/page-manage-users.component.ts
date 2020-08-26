import { AdminService } from './../../shared/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-manage-users',
  templateUrl: './page-manage-users.component.html',
  styleUrls: ['./page-manage-users.component.scss']
})
export class PageManageUsersComponent implements OnInit {

  getAllUsersRes;
  rows:any[] = [];
  cols = [
    "",
    "First Name",
    "Middle Name",
    "Last Name",
    "Emails",
    "Joined On",
    "Status",
    "",
  ];

  limit = 10;
  currentpage = 1;
  totalpages = 1;
  pagination = [];

  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    this.getAllUsers(this.currentpage, this.limit);
  }
  getAllUsers(pageindex, pagelength) {
    this.adminservice.getAllUsers(pageindex, pagelength).subscribe(res => {
      this.getAllUsersRes = JSON.parse(JSON.stringify(res));
      this.rows = (this.getAllUsersRes || {}).users || [];
      this.totalpages = parseInt((this.getAllUsersRes || {}).totalpages || 1);
      this.currentpage = parseInt((this.getAllUsersRes || {}).currentpage || 1)
      this.pagination = [];
      for (let i=0; i < this.totalpages; i++) {
        this.pagination.push({
          pagenum: (i+1),
          isactive: this.currentpage - 1 === i ? true : false
        });
      }
    });
  }
}
