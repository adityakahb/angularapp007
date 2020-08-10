import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

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
  
  onSignupSubmit() {
    this.regFormSubmitted = true;
    if (this.regForm.invalid) {
      return;
    }
    // this.loginFailMsg = '';
    // this.loginForm.get('__EMAIL').disable();
    // this.loginForm.get('__PASSWORD').disable();
    // this.isLoginLoading = true;
    // this.authService.signIn(this.loginForm.value).subscribe((res: any) => {
    //   this.loginForm.get('__EMAIL').enable();
    //   this.loginForm.get('__PASSWORD').enable();
    //   this.isLoginLoading = false;
    //   if (res.token) {
    //     this.authService.setToken(res.token);
    //     this.loginFailMsg = '';
    //     this.isLoginFailed = false;
    //     this.isLoginSuccess = true;
    //   } else {
    //     this.loginFailMsg = res.message || 'Some Error Occurred';
    //     this.isLoginFailed = true;
    //     this.isLoginSuccess = false;
    //   }
    // });
  }
}
