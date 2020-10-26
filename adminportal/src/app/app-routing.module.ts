import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'offers', loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule) },
      { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
      { path: 'a-b-testing', loadChildren: () => import('./a-b-testing/a-b-testing.module').then(m => m.ABTestingModule) },
    ]
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
