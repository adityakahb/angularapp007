import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddbulkComponent } from './page-addbulk.component';

const routes: Routes = [
  { path: '', component: PageAddbulkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAddbulkRoutingModule { }
