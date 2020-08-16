import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../../../../../src/app/shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../../../../../src/app/shared/directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageManageUsersComponent } from './page-manage-users.component';
import { PageManageUsersRoutingModule } from './page-manage-users-routing.module';
import { SectionHeaderModule } from './../../../../../../src/app/shared/components/section-header/section-header.module';
import { AlertMsgModule } from './../../../../../../src/app/shared/components/alert-msg/alert-msg.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    PageManageUsersRoutingModule,
    SectionHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    CtaBtnModule,
    AlertMsgModule,
  ],
  declarations: [
    PageManageUsersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageManageUsersModule { }
