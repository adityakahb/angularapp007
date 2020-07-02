import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductImgComponent implements OnInit {

  @Input() class;
  @Input() link;
  @Input() cProps;

  constructor() { }

  ngOnInit(): void {}
}
