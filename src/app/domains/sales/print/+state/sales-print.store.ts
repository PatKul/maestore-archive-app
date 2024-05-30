import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';

import { SalesService } from '../../sales.service';
import { SalesDetailDto } from './sales-print.dto';

type SalesPrintState = {
  isLoading: boolean;
  sale: SalesDetailDto;
  error: string;
};

const initialState: SalesPrintState = {
  isLoading: false,
  sale: new SalesDetailDto(),
  error: '',
};

export const SalesPrintStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withMethods((store, service = inject(SalesService)) => ({
    fetchById: rxMethod<string>(
      pipe(
        switchMap((id) => {
          patchState(store, { isLoading: true, error: '' });

          return service.getById(id).pipe(
            tapResponse({
              next: (dto) => {
                patchState(store, { sale: dto.data });
              },
              error: (error: any) =>
                patchState(store, { error: error.message }),
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
  })),

  withComputed((store) => ({
    netAmount: computed(() => {
      if (!store.sale()) {
        return 0;
      }

      return store.sale().entries.reduce((a, b) => a + b.total_sales_price, 0);
    }),

    change: computed(() => {
      if (!store.sale()) {
        return 0;
      }

      const netAmount = store
        .sale()
        .entries.reduce((a, b) => a + b.total_sales_price, 0);
      return store.sale().amount_paid - netAmount;
    }),
  }))
);
