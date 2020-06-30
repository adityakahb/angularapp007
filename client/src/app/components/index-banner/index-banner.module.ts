import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../shared/components/cta-btn/cta-btn.module';
import { IndexBannerComponent } from './index-banner.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ResponsiveImageModule } from './../../shared/components/responsive-image/responsive-image.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    ResponsiveImageModule,
  ],
  declarations: [
    IndexBannerComponent
  ],
  exports: [
    IndexBannerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IndexBannerModule {}
