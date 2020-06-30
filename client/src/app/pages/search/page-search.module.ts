import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../shared/directives/directive.module';
import { FiltersContainerModule } from './../../components/filters-container/filters-container.module';
import { FilterSectionModule } from './../../shared/components/filter-section/filter-section.module';
import { ItemCarouselModule } from './../../components/item-carousel/item-carousel.module';
import { ItemTeaserModule } from './../../shared/components/item-teaser/item-teaser.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageSearchComponent } from './page-search.component';
import { PageSearchRoutingModule } from './page-search-routing.module';
import { PriceModule } from './../../shared/components/price/price.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    DirectiveModule,
    FiltersContainerModule,
    FilterSectionModule,
    ItemCarouselModule,
    ItemTeaserModule,
    PageSearchRoutingModule,
    PriceModule,
  ],
  declarations: [
    PageSearchComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageSearchModule { }
