import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-manage-users',
  templateUrl: './page-manage-users.component.html',
  styleUrls: ['./page-manage-users.component.scss']
})
export class PageManageUsersComponent implements OnInit {

  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor() { }

  ngOnInit() {}
}
