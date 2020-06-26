import { ResponsiveImageModule } from './../responsive-image/responsive-image.module';
import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../cta-btn/cta-btn.module';
import { DirectiveModule } from './../../directives/directive.module';
import { NgModule } from '@angular/core';
import { RatingsModule } from './../ratings/ratings.module';
import { ItemBannerComponent } from './item-banner.component';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    DirectiveModule,
    RatingsModule,
    ResponsiveImageModule
  ],
  declarations: [
    ItemBannerComponent
  ],
  exports: [
    ItemBannerComponent
  ]
})

export class ItemBannerModule {}
