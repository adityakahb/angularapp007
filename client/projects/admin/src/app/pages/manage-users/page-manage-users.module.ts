import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../../../../../src/app/shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../../../../../src/app/shared/directives/directive.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageManageUsersComponent } from './page-manage-users.component';
import { PageManageUsersRoutingModule } from './page-manage-users-routing.module';
import { PipesModule } from './../../../../../../src/app/shared/pipes/pipes.module';
import { SectionHeaderModule } from './../../../../../../src/app/shared/components/section-header/section-header.module';
import { StatusPillModule } from './../../../../../../src/app/shared/components/status-pill/status-pill.module';
import { UserAvatarModule } from './../../../../../../src/app/shared/components/user-avatar/user-avatar.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    DirectiveModule,
    PageManageUsersRoutingModule,
    PipesModule,
    SectionHeaderModule,
    StatusPillModule,
    UserAvatarModule,
  ],
  declarations: [
    PageManageUsersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageManageUsersModule { }
