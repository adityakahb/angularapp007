import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './shared/guards/admin.guard';

interface IRoute {
  path: string;
  redirectTo: string;
  pathMatch: string;
  canActivate?: any
}

const routeArr = [
  {
    p: '',
    r: 'login',
    m: 'prefix',
    a: false
  },
  {
    p: 'login',
    m: 'prefix',
    a: false
  },
  {
    p: 'register',
    m: 'prefix',
    a: false
  },
  {
    p: 'dashboard',
    m: 'prefix',
    a: true
  },
  {
    p: 'manage-users',
    m: 'prefix',
    a: true
  },
  {
    p: 'manage-categories',
    m: 'prefix',
    a: true
  },
  {
    p: 'manage-products',
    m: 'prefix',
    a: true
  },
  {
    p: 'manage-campaigns',
    m: 'prefix',
    a: true
  }
]

let routes = [] as Routes;

routeArr.forEach(route => {
  let obj = {} as IRoute;
  obj.path = route.p;
  obj.pathMatch = route.m;
  obj.redirectTo = route.r ? route.r : route.p;
  if (route.a) {
    obj.canActivate = [AdminGuard];
  }
  routes.push(obj);
});

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'prefix' },
//   { path: 'login', redirectTo: '/login', pathMatch: 'prefix' },
//   { path: 'register', redirectTo: '/register', pathMatch: 'prefix' },
//   { path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'prefix', canActivate: [AdminGuard] }
//   { path: 'manage-campaigns', redirectTo: '/dashboard', pathMatch: 'prefix', canActivate: [AdminGuard] }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
