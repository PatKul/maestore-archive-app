import { Routes } from '@angular/router';
import { SalesListComponent } from './list/sales-list.component';
import { SalesPrintComponent } from './print/sales-print.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: SalesListComponent,
  },
  {
    path: 'print/:id',
    component: SalesPrintComponent,
  },
];
