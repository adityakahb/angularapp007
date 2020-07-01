import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.scss']
})
export class ProductImgComponent implements OnInit {

  @Input() class;
  @Input() link;
  @Input() cProps;

  constructor() { }

  ngOnInit(): void {
  }
}
