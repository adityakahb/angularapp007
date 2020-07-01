import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductImgComponent } from './product-img.component';
import { ResponsiveImageModule } from './../responsive-image/responsive-image.module';

@NgModule({
  imports: [
    CommonModule,
    ResponsiveImageModule,
  ],
  declarations: [
    ProductImgComponent
  ],
  exports: [
    ProductImgComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductImgModule { }
