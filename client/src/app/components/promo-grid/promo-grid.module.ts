import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../shared/components/cta-btn/cta-btn.module';
import { ItemBannerModule } from './../../shared/components/item-banner/item-banner.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipesModule } from './../../shared/pipes/pipes.module';
import { ProductImgModule } from './../../shared/components/product-img/product-img.module';
import { PromoGridComponent } from './promo-grid.component';
import { ResponsiveImageModule } from './../../shared/components/responsive-image/responsive-image.module';
import { UserAvatarModule } from './../../shared/components/user-avatar/user-avatar.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    ItemBannerModule,
    PipesModule,
    ProductImgModule,
    ResponsiveImageModule,
    UserAvatarModule,
  ],
  declarations: [
    PromoGridComponent,
  ],
  exports: [
    PromoGridComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class PromoGridModule {}
