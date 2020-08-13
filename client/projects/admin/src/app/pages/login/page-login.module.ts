import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../../../../../src/app/shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../../../../../src/app/shared/directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageLoginComponent } from './page-login.component';
import { PageLoginRoutingModule } from './page-login-routing.module';
import { SectionHeaderModule } from './../../../../../../src/app/shared/components/section-header/section-header.module';
import { AlertMsgModule } from './../../../../../../src/app/shared/components/alert-msg/alert-msg.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    PageLoginRoutingModule,
    SectionHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    CtaBtnModule,
    AlertMsgModule,
  ],
  declarations: [
    PageLoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageLoginModule { }
