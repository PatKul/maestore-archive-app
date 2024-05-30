import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

import {
  CloseIconButtonComponent,
  ErrorLabelComponent,
  HeaderLabelComponent,
  LoadingTextComponent,
  PrimaryButtonComponent,
} from '../../../common';

import { SalesPrintStore } from './+state/sales-print.store';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NgxPrintModule,

    HeaderLabelComponent,
    CloseIconButtonComponent,
    PrimaryButtonComponent,
    LoadingTextComponent,
    ErrorLabelComponent,
  ],
  selector: 'app-sales-print',
  templateUrl: './sales-print.component.html',
})
export class SalesPrintComponent implements OnInit {
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);
  readonly store = inject(SalesPrintStore);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.store.fetchById(id);
    }
  }

  close() {
    this.router.navigate(['/sales/list']);
  }
}
