import { CommonModule } from '@angular/common';
import { CtaBtnComponent } from './cta-btn.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CtaBtnComponent
  ],
  exports: [
    CtaBtnComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CtaBtnModule { }
