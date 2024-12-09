import { Routes } from '@angular/router';
import { AboutComponent } from '@app/pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:view', component: DashboardComponent },
  { path: 'auth', component: LoginComponent },
  { path: 'auth/:type', component: LoginComponent },
];
