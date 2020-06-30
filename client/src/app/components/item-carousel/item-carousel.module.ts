import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../shared/components/cta-btn/cta-btn.module';
import { ItemCarouselComponent } from './item-carousel.component';
import { ItemTeaserModule } from './../../shared/components/item-teaser/item-teaser.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    ItemTeaserModule,
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
