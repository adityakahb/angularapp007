import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResponsiveBreakpointDirective } from './ResponsiveBreakpoint/responsive-breakpoint.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResponsiveBreakpointDirective
  ],
  exports: [
    ResponsiveBreakpointDirective
  ],
  providers: []
})
export class DirectiveModule { }
