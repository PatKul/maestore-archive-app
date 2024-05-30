import { Routes } from '@angular/router';

import { LoginComponent } from './domains/login/login.component';
import { LayoutComponent } from './domains/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'sales',
    component: LayoutComponent,
    loadChildren: () => import('./domains/sales/routes').then((m) => m.routes),
  },
];
