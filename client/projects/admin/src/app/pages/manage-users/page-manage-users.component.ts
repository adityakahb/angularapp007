import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from './../../shared/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-manage-users',
  templateUrl: './page-manage-users.component.html',
  styleUrls: ['./page-manage-users.component.scss']
})
export class PageManageUsersComponent implements OnInit {
  __EMAIL: FormControl;
  __PASSWORD: FormControl;
  
  regFailMsg = '';
  isRegLoading = false;
  isLoginFailed = false;
  isLoginSuccess = false;

  regForm;
  regFormSubmitted = false;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.__EMAIL = new FormControl('', [Validators.required, Validators.email]);
    this.__PASSWORD = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/)
    ]);
  }
  createForm(): void {
    this.regForm = new FormGroup({
      __EMAIL: this.__EMAIL,
      __PASSWORD: this.__PASSWORD,
    });
  }

  get regControls() { return this.regForm.controls; }
  
  onSignin() {
    this.regFormSubmitted = true;
    if (this.regForm.invalid) {
      return;
    }
    this.regFailMsg = '';
    this.regForm.get('__EMAIL').disable();
    this.regForm.get('__PASSWORD').disable();
    this.isRegLoading = true;
    this.adminService.signIn(this.regForm.value).subscribe((res: any) => {
      this.regForm.get('__EMAIL').enable();
      this.regForm.get('__PASSWORD').enable();
      this.isRegLoading = false;
      if (res.token) {
        this.adminService.setToken(res.token);
        this.regFailMsg = '';
        this.isLoginFailed = false;
        this.isLoginSuccess = true;
        // this.router.navigateByUrl()
      } else {
        this.regFailMsg = res.message || 'Some Error Occurred';
        this.isLoginFailed = true;
        this.isLoginSuccess = false;
      }
    });
  }
}
