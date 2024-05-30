import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime } from 'rxjs';

import {
  FilterButtonComponent,
  HeaderLabelComponent,
  PrimaryButtonComponent,
  DropdownButtonComponent,
  LoadingTextComponent,
  SecondaryButtonComponent,
  ErrorLabelComponent,
} from '../../../common';

import { SalesListStore } from './+state';
import { SalesListEntriesComponent } from './components/sales-list-entries.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    PrimaryButtonComponent,
    SecondaryButtonComponent,
    HeaderLabelComponent,
    FilterButtonComponent,
    DropdownButtonComponent,
    LoadingTextComponent,
    ErrorLabelComponent,

    SalesListEntriesComponent,
  ],
  selector: 'app-sales',
  templateUrl: './sales-list.component.html',
})
export class SalesListComponent implements OnInit {
  readonly router = inject(Router);
  readonly store = inject(SalesListStore);
  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(debounceTime(500)).subscribe(() => {
      this.store.fetch();
    });
  }

  ngOnInit(): void {
    this.store.fetch();
    this.store.fetchLocations();
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.store.setSearchValue(value);
    this.searchSubject.next(value);
  }

  setLocationId(id: number) {
    this.store.setLocationId(id);
    this.store.fetch();
  }
}
