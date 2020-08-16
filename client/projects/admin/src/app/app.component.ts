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
  constructor(private authService: AdminService) {

  }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }
}
