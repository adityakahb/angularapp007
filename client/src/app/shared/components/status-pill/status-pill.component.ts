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
      icon: 'checkmark-circle-outline',
      theme: 'success'
    }, {
      type: 'INACTIVE',
      icon: 'close-circle-outline',
      theme: 'danger'
    }, {
      type: 'IN REVIEW',
      icon: 'eye-outline',
      theme: 'secondary'
    }, {
      type: 'REPORTED',
      icon: 'alert-circle-outline',
      theme: 'info'
    }, {
      type: 'ON HOLD',
      icon: 'hand-right-outline',
      theme: 'warning'
    }, {
      type: 'CANCELLED',
      icon: 'trash-bin-outline',
      theme: 'danger'
    }, {
      type: 'MARKED FOR DELETION',
      icon: 'trash-outline',
      theme: 'info'
    }, {
      type: 'DELETED',
      icon: 'trash-outline',
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
