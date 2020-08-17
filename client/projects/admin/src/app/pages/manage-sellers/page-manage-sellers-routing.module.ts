import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageManageSellersComponent } from './page-manage-sellers.component';

const routes: Routes = [
  { path: 'manage-sellers', component: PageManageSellersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageManageSellersRoutingModule { }
