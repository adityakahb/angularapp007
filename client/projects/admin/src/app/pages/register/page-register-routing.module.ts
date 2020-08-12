import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageRegisterComponent } from './page-register.component';

const routes: Routes = [
  { path: 'register', component: PageRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRegisterRoutingModule { }
