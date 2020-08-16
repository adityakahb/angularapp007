import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageManageProductsComponent } from './page-manage-products.component';

const routes: Routes = [
  { path: 'manage-products', component: PageManageProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageManageProductsRoutingModule { }
