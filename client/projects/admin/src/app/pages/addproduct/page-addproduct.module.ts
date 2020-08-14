import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../../../../../src/app/shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../../../../../src/app/shared/directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageAddproductComponent } from './page-addproduct.component';
import { PageAddproductRoutingModule } from './page-addproduct-routing.module';
import { SectionHeaderModule } from './../../../../../../src/app/shared/components/section-header/section-header.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    PageAddproductRoutingModule,
    SectionHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    CtaBtnModule,
  ],
  declarations: [
    PageAddproductComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageAddproductModule { }
