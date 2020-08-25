import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-pill',
  templateUrl: './status-pill.component.html',
  styleUrls: ['./status-pill.component.scss']
})
export class StatusPillComponent implements OnInit {
  statusArr = [
    {
      type: 'ACTIVE',
      icon: 'checkmark-circle',
      theme: 'success'
    }, {
      type: 'INACTIVE',
      icon: 'close',
      theme: 'danger'
    }, {
      type: 'IN REVIEW',
      icon: 'eye',
      theme: 'secondary'
    }, {
      type: 'REPORTED',
      icon: 'alert-circle',
      theme: 'info'
    }, {
      type: 'ON HOLD',
      icon: 'hand-right',
      theme: 'warning'
    }, {
      type: 'CANCELLED',
      icon: 'trash-bin',
      theme: 'danger'
    }, {
      type: 'MARKED FOR DELETION',
      icon: 'trash',
      theme: 'info'
    }, {
      type: 'DELETED',
      icon: 'trash',
      theme: 'danger'
    }
  ];

  @Input() cProps;
  objarr;
  obj;
  constructor() { }

  ngOnInit(): void {
    this.objarr = this.statusArr.filter(item => item.type === this.cProps);
    this.obj = this.objarr.length > 0 ? this.objarr[0] : {};
  }

}
