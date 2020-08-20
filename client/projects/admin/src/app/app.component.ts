import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AdminService } from './shared/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoggedIn$: Observable<boolean>; 
  title = 'admin';
  showHeader = false;
  showSidebar = false;
  showFooter = false;
  constructor(private authService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
        this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
        this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    });
  }
}
