import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageManageCampaignsComponent } from './page-manage-campaigns.component';

const routes: Routes = [
  { path: '', component: PageManageCampaignsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageManageCampaignsRoutingModule { }
