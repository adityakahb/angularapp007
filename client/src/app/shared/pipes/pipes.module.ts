import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextTrimmerPipe } from './text-trimmer/text-trimmer.pipe';
import { DateFormatterPipe } from './date-formatter/date-formatter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextTrimmerPipe,
    DateFormatterPipe
  ],
  exports: [
    TextTrimmerPipe,
    DateFormatterPipe
  ],
  providers: []
})
export class PipesModule { }
