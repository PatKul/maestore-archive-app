import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { SalesListStore } from '../+state';
import {
  PrintIconButtonComponent,
  SortIconButtonComponent,
} from '../../../../common';

@Component({
  standalone: true,
  imports: [CommonModule, SortIconButtonComponent, PrintIconButtonComponent],
  selector: 'app-sales-list-entries',
  templateUrl: './sales-list-entries.component.html',
})
export class SalesListEntriesComponent {
  readonly router = inject(Router);
  readonly store = inject(SalesListStore);

  toggleSort(name: string) {
    this.store.sorter().toggle(name);
    this.store.fetch();
  }

  print(id: number) {
    this.router.navigate(['/sales/print/' + id]);
  }
}
