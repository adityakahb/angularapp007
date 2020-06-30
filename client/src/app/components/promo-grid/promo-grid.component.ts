import { Component, OnInit, ViewEncapsulation, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const $: any;
declare const require: any;

@Component({
  selector: 'app-promo-grid',
  templateUrl: './promo-grid.component.html',
  styleUrls: ['./promo-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PromoGridComponent implements OnInit, AfterViewInit {
  @ViewChild('heroslider') heroslider: ElementRef;

  bannerData = {};
  constructor(private ngZone: NgZone,
              @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {}

  ngAfterViewInit() {}
}
