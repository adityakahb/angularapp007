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
  isNavOpen = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    windowRefService: WindowRefService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    
  }
}
