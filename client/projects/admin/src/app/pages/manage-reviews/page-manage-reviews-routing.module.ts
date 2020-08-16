import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageManageReviewsComponent } from './page-manage-reviews.component';

const routes: Routes = [
  { path: 'manage-reviews', component: PageManageReviewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageManageReviewsRoutingModule { }
