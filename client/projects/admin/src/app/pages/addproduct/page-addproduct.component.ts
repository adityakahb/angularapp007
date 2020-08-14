import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from './../../shared/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-addproduct',
  templateUrl: './page-addproduct.component.html',
  styleUrls: ['./page-addproduct.component.scss']
})
export class PageAddproductComponent implements OnInit {
  bulkForm;
  bulkFormSubmitted = false;

  bulkFailMsg = '';
  isBulkLoading = false;
  isBulkFailed = false;
  isBulkSuccess = false;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    
  }
  createForm(): void {
    this.bulkForm = new FormGroup({});
  }

  get bulkControls() { return this.bulkForm.controls; }
  
  onBulk() {
    this.bulkFormSubmitted = true;
    this.bulkFailMsg = '';
    this.isBulkLoading = true;
    this.adminService.addBulkProducts().subscribe((res: any) => {
      console.log('---------------res', res);
    });
    // this.adminService.addBulkProducts().subscribe((res: any) => {
    //   this.isBulkLoading = false;
    //   if (res.token) {
    //     this.bulkFailMsg = '';
    //     this.isBulkFailed = false;
    //     this.isBulkSuccess = true;
    //   } else {
    //     this.bulkFailMsg = res.message || 'Some Error Occurred';
    //     this.isBulkFailed = true;
    //     this.isBulkSuccess = false;
    //   }
    // });
  }
}
