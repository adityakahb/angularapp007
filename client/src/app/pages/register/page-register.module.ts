import { CommonModule } from '@angular/common';
import { DirectiveModule } from './../../shared/directives/directive.module';
import { PageRegisterComponent } from './page-register.component';
import { PageRegisterRoutingModule } from './page-register-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SectionHeaderModule } from './../../shared/components/section-header/section-header.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    PageRegisterRoutingModule,
    SectionHeaderModule,
  ],
  declarations: [
    PageRegisterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageRegisterModule { }
