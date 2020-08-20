import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/page-login.module').then(m => m.PageLoginModule),
    data: { showHeader: false }
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/page-register.module').then(m => m.PageRegisterModule),
    data: { showHeader: false }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/page-dashboard.module').then(m => m.PageDashboardModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'manage-users',
    loadChildren: () => import('./pages/manage-users/page-manage-users.module').then(m => m.PageManageUsersModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'manage-categories',
    loadChildren: () => import('./pages/manage-categories/page-manage-categories.module').then(m => m.PageManageCategoriesModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'manage-products',
    loadChildren: () => import('./pages/manage-products/page-manage-products.module').then(m => m.PageManageProductsModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'manage-campaigns',
    loadChildren: () => import('./pages/manage-campaigns/page-manage-campaigns.module').then(m => m.PageManageCampaignsModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'manage-review',
    loadChildren: () => import('./pages/manage-reviews/page-manage-reviews.module').then(m => m.PageManageReviewsModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'manage-sellers',
    loadChildren: () => import('./pages/manage-sellers/page-manage-sellers.module').then(m => m.PageManageSellersModule),
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminGuard, Permissions],
})
export class AppRoutingModule {}
