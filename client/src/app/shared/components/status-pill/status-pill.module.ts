import { StatusPillComponent } from './status-pill.component';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StatusPillComponent
  ],
  exports: [
    StatusPillComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StatusPillModule { }
