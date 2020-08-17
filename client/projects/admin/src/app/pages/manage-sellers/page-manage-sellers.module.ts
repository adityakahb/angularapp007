import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../../../../../src/app/shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../../../../../src/app/shared/directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageManageSellersComponent } from './page-manage-sellers.component';
import { PageManageSellersRoutingModule } from './page-manage-sellers-routing.module';
import { SectionHeaderModule } from './../../../../../../src/app/shared/components/section-header/section-header.module';
import { AlertMsgModule } from './../../../../../../src/app/shared/components/alert-msg/alert-msg.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    PageManageSellersRoutingModule,
    SectionHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    CtaBtnModule,
    AlertMsgModule,
  ],
  declarations: [
    PageManageSellersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageManageSellersModule { }
