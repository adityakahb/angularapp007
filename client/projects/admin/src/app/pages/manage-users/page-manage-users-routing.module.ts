import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageManageUsersComponent } from './page-manage-users.component';

const routes: Routes = [
  { path: 'manage-users', component: PageManageUsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageManageUsersRoutingModule { }
