import { Injectable } from '@angular/core';
import { IAdmin } from './../interfaces/admin.interface';
import { IAuth } from './../interfaces/auth.interface';
import { IProduct } from './../interfaces/product.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { PLATFORM_ID, Inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  currentUser = {};
  endpoint = 'http://localhost:4000/adminapi';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  loggedIn; // {1}

  constructor(
    private http: HttpClient,
    public router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    this.loggedIn = new BehaviorSubject<boolean>(this.getToken() ? true : false);
  }

  // Sign-up
  signUp(user: IAdmin): Observable<any> {
    return this.http.post(`${this.endpoint}/register`, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Sign-in
  signIn(user: IAuth): Observable<any> {
    // console.log('============user', user);
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  setToken(token) {
    if (isPlatformBrowser(this.platformId) && localStorage) {
      localStorage.setItem('access_token', token);
    }
  }

  getToken() {
    if (isPlatformBrowser(this.platformId) && localStorage) {
      return localStorage.getItem('access_token');
    }
    return '';
  }

  setLoggedIn(val, token) {
    this.loggedIn.next(val);
    this.setToken(token);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  doLogout() {
    if (isPlatformBrowser(this.platformId) && localStorage) {
      const removeToken = localStorage.removeItem('access_token');
      this.setLoggedIn(false, null);
    }
  }

  getAllUsers(pageindex, pagelength): Observable<any> {
    return this.http.get(`${this.endpoint}/getall-users?page=${pageindex}&limit=${pagelength}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }
  // // User profile
  // getUserProfile(id): Observable<any> {
  //   return this.http.get(`${this.endpoint}/userprofile/${id}`, { headers: this.headers })
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // addBulkProducts(products): Observable<any> {
  //   return this.http.post(`${this.endpoint}/addbulkproducts`, products)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof HttpErrorResponse) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}