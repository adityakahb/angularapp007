import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../../../../../src/app/shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../../../../../src/app/shared/directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageAddproductsComponent } from './page-addproducts.component';
import { PageAddproductsRoutingModule } from './page-addproducts-routing.module';
import { SectionHeaderModule } from './../../../../../../src/app/shared/components/section-header/section-header.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    PageAddproductsRoutingModule,
    SectionHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    CtaBtnModule,
  ],
  declarations: [
    PageAddproductsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageAddproductsModule { }
