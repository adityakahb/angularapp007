import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextTrimmerPipe } from './TextTrimmer/text-trimmer.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextTrimmerPipe
  ],
  exports: [
    TextTrimmerPipe
  ],
  providers: []
})
export class PipesModule { }
