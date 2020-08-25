import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  @Input() cProps;
  fc = '';
  lc = '';

  constructor() { }

  ngOnInit() {
    const data = this.cProps || {};
    this.fc = data.firstname ? data.firstname.charAt(0) : '';
    this.lc = data.lastname ? data.lastname.charAt(0) : '';
  }
}
