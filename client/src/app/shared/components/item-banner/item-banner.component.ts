import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemBannerComponent implements OnInit {
  @Input() cProps;
  @Input() theme;
  @Input() type;

  btype = 'square'; 

  constructor() { }

  ngOnInit() {
    this.btype = (this.type ? this.type : 'square') + '-type';
  }
}
