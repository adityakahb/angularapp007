import { WindowRefService } from './../../../../../../src/app/shared/services/windowref.service';
import { PLATFORM_ID, Inject, Component, OnInit, HostListener, Input, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss']
})
export class SiteheaderComponent implements OnInit {
  @Input() loggedInUser;
  isnavopen = false;

  navlinks = [
    {
      icon: 'dashboard',
      text: 'Dashboard'
    },{
      icon: 'store_mall_directory',
      text: 'Manage Sellers'
    },{
      icon: 'category',
      text: 'Manage Categories'
    },{
      icon: 'groups',
      text: 'Manage Users'
    },{
      icon: 'widgets',
      text: 'Manage Products'
    },{
      icon: 'forum',
      text: 'Manage Reviews'
    },{
      icon: 'local_activity',
      text: 'Manage Campaigns'
    }
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    windowRefService: WindowRefService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    
  }
  toggleNav(val) {
    this.isnavopen = val;
  }
}
