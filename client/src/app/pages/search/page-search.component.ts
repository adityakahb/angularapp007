import { CommonFunctionsService } from './../../shared/services/common-functions.service';
import { Component, OnInit, ViewChild, NgZone, ElementRef, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';

declare const require: any;
declare const stickybits: any;
const searchResultsJson = require('./../../shared/data/search-results.json') || [];
const featuredResultsJson = require('./../../shared/data/featured-results.json') || [];
const filtersJson = require('./../../shared/data/filters.json') || [];

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchsticky') searchsticky: ElementRef;
  searchResultsData;
  featuredResultsData;
  filtersData;
  isFiltersModalOpen = false;
  searchDone = false;

  closeFiltersModal = () => {
    this.isFiltersModalOpen = false;
  }
  constructor(private searchService: SearchService,
              private ngZone: NgZone,
              private cService: CommonFunctionsService,
              @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    this.searchService.getSearchResults('').subscribe((res) => {
      if (res.status === 200) {
        if ((res.results || []).length > 0) {
          this.searchResultsData = res.results;
        } else {
          this.searchResultsData = [];
        }
        if ((res.filters || []).length > 0) {
          this.filtersData = res.filters;
        } else {
          this.filtersData = [];
        }
      } else {
      }
      this.searchDone = true;
      this.initiatePageSticky();
    });
    // this.searchResultsData = searchResultsJson;
    // this.featuredResultsData = featuredResultsJson;
    // this.filtersData = filtersJson;
  }

  ngAfterViewInit() {}

  openFiltersModal() {
    this.isFiltersModalOpen = true;
  }

  initiatePageSticky() {
    this.ngZone.runOutsideAngular(() => {
      if (isPlatformBrowser(this.platformId) && stickybits && this.searchsticky.nativeElement) {
        this.cService.addStickyBits(this.searchsticky.nativeElement.getAttribute('id'),
          {useStickyClasses: true, stickyBitStickyOffset: 64});
      }
    });
  }
}
