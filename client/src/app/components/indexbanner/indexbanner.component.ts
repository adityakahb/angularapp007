import { Component, OnInit, ViewEncapsulation, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const $: any;
declare const require: any;

const bannerJson = require('./../../shared/data/indexbanner.json');

@Component({
  selector: 'app-indexbanner',
  templateUrl: './indexbanner.component.html',
  styleUrls: ['./indexbanner.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class IndexbannerComponent implements OnInit, AfterViewInit {
  @ViewChild('heroslider') heroslider: ElementRef;

  bannerData = {};
  constructor(private ngZone: NgZone,
              @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    this.bannerData = bannerJson || [];
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      if (isPlatformBrowser(this.platformId)) {
        $(this.heroslider.nativeElement).slick({
          arrows: false,
          autoplay: false,
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 300,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    });
  }
}
