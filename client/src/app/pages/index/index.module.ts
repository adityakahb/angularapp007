import { CommonModule } from '@angular/common';
import { DirectiveModule } from './../../shared/directives/directive.module';
import { IndexBannerModule } from './../../components/index-banner/index-banner.module';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { ItemBannerModule } from './../../shared/components/item-banner/item-banner.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PromoGridModule } from './../../components/promo-grid/promo-grid.module';
import { RatingsModule } from './../../shared/components/ratings/ratings.module';
import { ResponsiveImageModule } from './../../shared/components/responsive-image/responsive-image.module';
import { SectionHeaderModule } from './../../shared/components/section-header/section-header.module';
import { StandardTeaserModule } from './../../shared/components/standard-teaser/standard-teaser.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    IndexBannerModule,
    IndexRoutingModule,
    ItemBannerModule,
    PromoGridModule,
    RatingsModule,
    ResponsiveImageModule,
    SectionHeaderModule,
    StandardTeaserModule,
  ],
  declarations: [
    IndexComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
