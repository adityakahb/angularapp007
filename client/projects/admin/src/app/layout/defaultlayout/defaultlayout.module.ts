import { AlertMsgModule } from './../../../../../../src/app/shared/components/alert-msg/alert-msg.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../../../../../src/app/shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../../../../../src/app/shared/directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SitefooterComponent } from './../sitefooter/sitefooter.component';
import { SiteheaderComponent } from './../siteheader/siteheader.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { UserAvatarModule } from './../../../../../../src/app/shared/components/user-avatar/user-avatar.module';

@NgModule({
  imports: [
    AlertMsgModule,
    BrowserAnimationsModule,
    CommonModule,
    CtaBtnModule,
    DirectiveModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    TypeaheadModule.forRoot(),
    UserAvatarModule,
  ],
  exports: [
    SiteheaderComponent,
    SitefooterComponent,
  ],
  declarations: [
    SiteheaderComponent,
    SitefooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultLayoutModule { }
