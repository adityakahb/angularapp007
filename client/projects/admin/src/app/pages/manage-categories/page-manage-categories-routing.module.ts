import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageManageCategoriesComponent } from './page-manage-categories.component';

const routes: Routes = [
  { path: 'manage-categories', component: PageManageCategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageManageCategoriesRoutingModule { }
