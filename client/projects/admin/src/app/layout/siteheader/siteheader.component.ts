import { WindowRefService } from './../../../../../../src/app/shared/services/windowref.service';
import { PLATFORM_ID, Inject, Component, OnInit, AfterViewInit, HostListener, Input, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare const require: any;
declare const $: any;

const className = 'nav-open';
const langJson = [];
const navJson = [];
let bodyElem;
let htmlElem;
let lastScrollTop = 0;
let lastScrollTopVal = 0;


@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss']
})
export class SiteheaderComponent implements OnInit, AfterViewInit {
  @ViewChild('siteheadernav') siteheadernav: ElementRef;
  @Input() loggedInUser;

  headerTypeahead: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  isLangNavOpen = false;
  isNavOpen = false;
  isScrolledDown = false;
  isSearchNavOpen = false;
  isUserNavOpen = false;
  langArr = [];
  langData = langJson;
  navData = navJson;

  loginForm;
  loginFormSubmitted = false;

  __EMAIL: FormControl;
  __PASSWORD: FormControl;
  isLoginLoading = false;
  isLoginFailed = false;
  isLoginSuccess = true;
  loginFailMsg = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    windowRefService: WindowRefService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      if (isPlatformBrowser(this.platformId)) {
        $(this.siteheadernav.nativeElement).accessibleMegaMenu();
      }
      // if (window && document) {
      //   $(this.siteheadernav.nativeElement).accessibleMegaMenu();
      //   bodyElem = document.querySelector('body');
      //   htmlElem = document.documentElement;
      // }
    });
    this.langData.forEach((item, index) => {
      if (index !== 0) {
        this.langArr.push(item);
      }
    });

    // let elem = document.querySelector('#megamenudiv');
    // let mArr = [];
    // if (elem) {
    //   let ul = elem.querySelector('#megamenudiv ._114Zhd');
    //   let megamenu = this.generateMegamenuArr(ul, 0);
    //   console.log('=========megamenu', JSON.stringify(megamenu));
    // }
  }

  createFormControls() {
    this.__EMAIL = new FormControl({ value: '' }, [Validators.required, Validators.email]);
    this.__PASSWORD = new FormControl({ value: '' }, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/)
    ]);
  }
  createForm(): void {
    this.loginForm = new FormGroup({
      __EMAIL: this.__EMAIL,
      __PASSWORD: this.__PASSWORD,
    });
  }

  generateMegamenuArr(ul, level) {
    let arr = [];
    let li = Array.prototype.slice.call(ul.children || []);

    (li || []).forEach(liitem => {
      let obj = {};
      let items = Array.prototype.slice.call(liitem.children || []);
      let isMain = liitem.classList.contains('_2BfSTw');
      // if (items.length === 1 && items[0].tagName === 'UL') {
      //   this.generateMegamenuArr(item, level+1); 
      // } else {
      // }
      items.forEach(item => {
        if (item.tagName === 'A' || item.tagName === 'SPAN') {
          obj['level'] = '' + level;
          obj['title'] = (item.innerHTML).replace( /(<([^>]+)>)/ig, '');
          obj['href'] = '#';
          if (isMain) {
            obj['ismain'] = 'true';
          }
        }
        if (item.tagName === 'UL') {
          obj['links'] = this.generateMegamenuArr(item, level+1);
        }
      });
      arr.push(obj)
    });
    return arr;
  }

  get loginControls() { return this.loginForm.controls; }

  // @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
  //   if (window && document) {
  //     lastScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     if (lastScrollTop > 0) {
  //       // this.isScrolledDown = true;
  //       this.isScrolledDown = false;
  //     } else if (this.isScrolledDown && lastScrollTop <= 0) {
  //       this.isScrolledDown = false;
  //     }
  //   }
  // }

  @HostListener('document:keyup', ['$event']) onEscapeEvent($event) {
    if (isPlatformBrowser(this.platformId)
      && ($event || {}).keyCode === 27
      && (this.isNavOpen || this.isUserNavOpen || this.isLangNavOpen || this.isSearchNavOpen)) {
      this.closeAllNav();
    }
    // if (window && document) {
    //   if (($event || {}).keyCode === 27 && (this.isNavOpen || this.isUserNavOpen || this.isLangNavOpen || this.isSearchNavOpen)) {
    //     this.closeAllNav();
    //   }
    // }
  }

  updateScrollVal() {
    // if (window && document && bodyElem) {
    //   bodyElem.classList.add(className);
    //   // bodyElem.style.top = (-1 * lastScrollTop) + 'px';
    //   lastScrollTopVal = lastScrollTop;
    // }
  }

  openNav() {
    this.isNavOpen = true;
    this.updateScrollVal();
  }

  openSearchNav() {
    this.isSearchNavOpen = true;
    this.updateScrollVal();
  }

  openLangNav() {
    this.isLangNavOpen = true;
    this.updateScrollVal();
  }

  openUserNav() {
    this.isUserNavOpen = true;
    this.loginForm.reset();
    this.updateScrollVal();
  }

  closeAllNav() {
    this.isNavOpen = false;
    this.isUserNavOpen = false;
    this.isLangNavOpen = false;
    this.isSearchNavOpen = false;
    // if (window && document && htmlElem && bodyElem && bodyElem.classList.contains(className)) {
    //   // bodyElem.removeAttribute('style');
    //   bodyElem.classList.remove(className);
    //   // window.scroll({
    //   //   top: lastScrollTopVal
    //   // });
    // }
  }

  onLoginSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginFailMsg = '';
    this.loginForm.get('__EMAIL').disable();
    this.loginForm.get('__PASSWORD').disable();
    this.isLoginLoading = true;
  }

  onLogout() {
    this.isLoginSuccess = false;
  }
}
