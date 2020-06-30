import { Component, OnInit, ViewEncapsulation, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const $: any;
declare const require: any;

const bannerJson = require('./../../shared/data/indexbanner.json');

@Component({
  selector: 'app-index-banner',
  templateUrl: './index-banner.component.html',
  styleUrls: ['./index-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class IndexBannerComponent implements OnInit, AfterViewInit {
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
          arrows: true,
          autoplay: false,
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 300,
          prevArrow: `<button
              class="btn btn-light btn-lg slick-prev"
              type="button" title="Previous">
              <ion-icon name="chevron-back"></ion-icon>
            </button>`,
              nextArrow: `<button
              class="btn btn-light btn-lg slick-next"
              type="button" title="Next">
              <ion-icon name="chevron-forward"></ion-icon>
            </button>`,
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
