import { WindowRefService } from './windowref.service';
import { Injectable, NgZone, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';

declare const stickybits: any;
@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {
  private cbp = 'xs';
  private stickies = [];
  private stickyObj = [];
  private isEventAttached = false;
  constructor(private ngZone: NgZone,
              private windowRef: WindowRefService,
              @Inject(PLATFORM_ID) private platformId: any) {
                fromEvent(this.windowRef.nativeWindow, 'resize').subscribe(() => {
                  if (isPlatformBrowser(this.platformId)) {
                    this.stickyObj.forEach((item) => {
                      if ((item.stickybit || {}).cleanup) {
                        item.stickybit.cleanup();
                      }
                      item.stickybit = stickybits('#' + item.id, item.options);
                    });
                  }
                });
              }
  setCBP(value) {
    this.cbp = value;
  }
  getCBP() {
    return this.cbp;
  }
  startStickybits() {
    this.ngZone.runOutsideAngular(() => {
      if (isPlatformBrowser(this.platformId) && stickybits) {
        this.stickies.forEach((item) => {
          setTimeout(() => {
            this.stickyObj.push({
              id: item.id,
              options: item.options,
              stickybit: stickybits('#' + item.id, item.options)
            });
          }, 1000);
        });
      }
    });
  }
  addStickyBits(id, options) {
    const existingArr = this.stickies.filter((item) => item.id === id);
    if (existingArr.length === 0) {
      this.stickies.push({
        id,
        options
      });
      this.startStickybits();
    }
  }
  // @HostListener('window:resize', ['$event']) onStickyResizeEvent($event) {
  //   console.log('============hellow');
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.stickyObj.forEach((item) => {
  //       if (item.cleanup) {
  //         item.cleanup();
  //       }
  //     });
  //     this.startStickybits();
  //   }
  // }
}
