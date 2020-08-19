import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login' },
  { path: 'login', redirectTo: '/login' },
  { path: 'register', redirectTo: '/register' },
  { path: 'dashboard', redirectTo: '/dashboard', canActivate: [AdminGuard] },
  { path: 'manage-users', redirectTo: '/manage-users', canActivate: [AdminGuard] },
  { path: 'manage-categories', redirectTo: '/manage-categories', canActivate: [AdminGuard] },
  { path: 'manage-products', redirectTo: '/manage-products', canActivate: [AdminGuard] },
  { path: 'manage-campaigns', redirectTo: '/manage-campaigns', canActivate: [AdminGuard] },
  { path: 'manage-review', redirectTo: '/manage-reviews', canActivate: [AdminGuard] },
  { path: 'manage-sellers', redirectTo: '/manage-sellers', canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AdminGuard, Permissions]
})
export class AppRoutingModule { }
