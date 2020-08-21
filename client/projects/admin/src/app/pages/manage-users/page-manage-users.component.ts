import { Component, OnInit } from '@angular/core';
import { format as dateFormat } from 'date-fns';

declare const require: any;

const userjson = require('./../../data/manage-users.json');

@Component({
  selector: 'app-page-manage-users',
  templateUrl: './page-manage-users.component.html',
  styleUrls: ['./page-manage-users.component.scss']
})
export class PageManageUsersComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  columnDefs = [
    {headerName: 'First Name', field: 'firstname' },
    {headerName: 'Middle Name', field: 'middlename' },
    {headerName: 'Last Name', field: 'lastname'},
    {headerName: 'Email', field: 'email' },
    {headerName: 'Joined On', field: 'joinedon' },
    {headerName: 'Status', field: 'status'}
  ];

  // rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  rowData = [];

  constructor() { }

  ngOnInit() {
    (userjson || []).forEach(prod => {
      this.rowData.push({
        firstname: prod.__FIRSTNAME,
        middlename: prod.__MIDDLENAME,
        lastname: prod.__LASTNAME,
        email: ((prod.__EMAIL || [])[0]).__ADDRESS || '',
        joinedon: dateFormat(new Date(prod.__JOINED), 'P'),
        status: ((prod.__STATUS || {}).__TYPE || '').toUpperCase()
      });
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  }
}
