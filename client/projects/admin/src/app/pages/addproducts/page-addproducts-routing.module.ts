import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddproductsComponent } from './page-addproducts.component';

const routes: Routes = [
  { path: 'addproducts', component: PageAddproductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAddproductsRoutingModule { }
