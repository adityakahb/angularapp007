import { CtaBtnModule } from './../cta-btn/cta-btn.module';
import { ItemTeaserModule } from './../item-teaser/item-teaser.module';
import { ItemCarouselComponent } from './item-carousel.component';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    ItemTeaserModule,
    CtaBtnModule
  ],
  declarations: [
    ItemCarouselComponent
  ],
  exports: [
    ItemCarouselComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemCarouselModule {}
