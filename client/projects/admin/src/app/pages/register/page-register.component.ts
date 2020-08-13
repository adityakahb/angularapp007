import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from './../../shared/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss']
})
export class PageRegisterComponent implements OnInit {
  __FIRSTNAME: FormControl;
  __MIDDLENAME: FormControl;
  __LASTNAME: FormControl;
  __EMAIL: FormControl;
  __PASSWORD: FormControl;
  
  regForm;
  regFormSubmitted = false;

  regFailMsg = '';
  isRegLoading = false;
  isRegFailed = false;
  isRegSuccess = false;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.__FIRSTNAME = new FormControl('', [Validators.required]);
    this.__MIDDLENAME = new FormControl('');
    this.__LASTNAME = new FormControl('', [Validators.required]);
    this.__EMAIL = new FormControl('', [Validators.required, Validators.email]);
    this.__PASSWORD = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/)
    ]);
  }
  createForm(): void {
    this.regForm = new FormGroup({
      __FIRSTNAME: this.__FIRSTNAME,
      __MIDDLENAME: this.__MIDDLENAME,
      __LASTNAME: this.__LASTNAME,
      __EMAIL: this.__EMAIL,
      __PASSWORD: this.__PASSWORD,
    });
  }

  get regControls() { return this.regForm.controls; }
  
  onSignup() {
    this.regFormSubmitted = true;
    if (this.regForm.invalid) {
      return;
    }
    this.regFailMsg = '';
    this.regForm.get('__FIRSTNAME').disable();
    this.regForm.get('__MIDDLENAME').disable();
    this.regForm.get('__LASTNAME').disable();
    this.regForm.get('__EMAIL').disable();
    this.regForm.get('__PASSWORD').disable();
    this.isRegLoading = true;
    this.adminService.signUp(this.regForm.value).subscribe((res: any) => {
      this.regForm.get('__FIRSTNAME').enable();
      this.regForm.get('__MIDDLENAME').enable();
      this.regForm.get('__LASTNAME').enable();
      this.regForm.get('__EMAIL').enable();
      this.regForm.get('__PASSWORD').enable();
      this.isRegLoading = false;
      if (res.token) {
        this.adminService.setToken(res.token);
        this.regFailMsg = '';
        this.isRegFailed = false;
        this.isRegSuccess = true;
      } else {
        this.regFailMsg = res.message || 'Some Error Occurred';
        this.isRegFailed = true;
        this.isRegSuccess = false;
      }
    });
  }
}
