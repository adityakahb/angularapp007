import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AdminService } from '../services/admin.service';

@Injectable()

export class AdminInterceptor implements HttpInterceptor {
  constructor(private adminService: AdminService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.adminService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authToken
      }
    });
    return next.handle(req);
  }
}