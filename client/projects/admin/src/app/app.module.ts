// import { RouterModule } from '@angular/router';
// import { AdminInterceptor } from './shared/interceptors/admin.interceptor';
// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { PageDashboardModule } from './pages/dashboard/page-dashboard.module';
// import { PageLoginModule } from './pages/login/page-login.module';
// import { PageManageUsersModule } from './pages/manage-users/page-manage-users.module';
// import { PageRegisterModule } from './pages/register/page-register.module';
// import { DefaultLayoutModule } from './layout/defaultlayout/defaultlayout.module';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     AppRoutingModule,
//     BrowserModule,
//     DefaultLayoutModule,
//     HttpClientModule,
//     PageDashboardModule,
//     PageLoginModule,
//     PageManageUsersModule,
//     PageRegisterModule,
//     RouterModule.forRoot([]),
//   ],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: AdminInterceptor,
//       multi: true
//     }
//   ],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { RouterModule } from '@angular/router';
import { AdminInterceptor } from './shared/interceptors/admin.interceptor';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DefaultLayoutModule } from './layout/defaultlayout/defaultlayout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DefaultLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptor,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
