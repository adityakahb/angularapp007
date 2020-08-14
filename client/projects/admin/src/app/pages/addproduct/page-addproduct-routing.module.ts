import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddproductComponent } from './page-addproduct.component';

const routes: Routes = [
  { path: 'addproduct', component: PageAddproductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAddproductRoutingModule { }
