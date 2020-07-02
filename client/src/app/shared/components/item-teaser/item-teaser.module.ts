import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../cta-btn/cta-btn.module';
import { DirectiveModule } from './../../directives/directive.module';
import { ItemTeaserComponent } from './item-teaser.component';
import { NgModule } from '@angular/core';
import { PipesModule } from './../../pipes/pipes.module';
import { ProductImgModule } from './../product-img/product-img.module';
import { RatingsModule } from './../ratings/ratings.module';
import { ResponsiveImageModule } from './../responsive-image/responsive-image.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    DirectiveModule,
    PipesModule,
    ProductImgModule,
    RatingsModule,
    ResponsiveImageModule,
  ],
  declarations: [
    ItemTeaserComponent,
  ],
  exports: [
    ItemTeaserComponent
  ]
})

export class ItemTeaserModule {}
