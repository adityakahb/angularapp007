import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../shared/components/cta-btn/cta-btn.module';
import { FiltersContainerComponent } from './filters-container.component';
import { FilterSectionModule } from './../../shared/components/filter-section/filter-section.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    FilterSectionModule
  ],
  declarations: [
    FiltersContainerComponent
  ],
  exports: [
    FiltersContainerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FiltersContainerModule {}
