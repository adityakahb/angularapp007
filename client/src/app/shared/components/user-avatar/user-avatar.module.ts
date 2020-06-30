import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../cta-btn/cta-btn.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserAvatarComponent } from './user-avatar.component';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule
  ],
  declarations: [
    UserAvatarComponent
  ],
  exports: [
    UserAvatarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserAvatarModule { }
