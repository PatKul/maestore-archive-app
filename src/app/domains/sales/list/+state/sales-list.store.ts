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

import moment from 'moment';

import { QueryBuilder } from './query-builder';
import { HttpPaginatedDto, SearchField } from '../../../../common';
import { LocationDto, SalesListDto } from './sales-list.dto';
import { SalesService } from '../../sales.service';
import { LocationService } from '../../location.service';
import { SalesSorter, SearchFieldEnum, searchFields } from './sales-sorter';

type SalesListState = {
  isLoading: boolean;
  searchFields: SearchField[];
  searchField: string;
  searchValue: string;
  locationId: number;
  locations: LocationDto[];
  dateRange: {
    start_date: Date;
    end_date: Date;
  };
  page: HttpPaginatedDto<SalesListDto>;
  sorter: SalesSorter;
  error: string;
};

const initialState: SalesListState = {
  isLoading: false,
  searchFields,
  searchField: SearchFieldEnum.SalesNote,
  searchValue: '',
  locationId: 0,
  locations: [
    {
      id: 0,
      name: 'All Locations',
    },
  ],
  dateRange: {
    start_date: moment().subtract(1, 'years').toDate(),
    end_date: new Date(),
  },
  page: new HttpPaginatedDto<SalesListDto>(),
  sorter: new SalesSorter(),
  error: '',
};

export const SalesListStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withMethods(
    (
      store,
      service = inject(SalesService),
      locationService = inject(LocationService),
      queryBuilder = inject(QueryBuilder)
    ) => ({
      fetch: rxMethod<void>(
        pipe(
          switchMap(() => {
            patchState(store, { isLoading: true, error: '' });
            const query = queryBuilder
              .setSearchField(store.searchField())
              .setSearchValue(store.searchValue())
              .setLocationId(store.locationId())
              .setStartDate(store.dateRange().start_date)
              .setEndDate(store.dateRange().end_date)
              .setSortValue(store.sorter().getSortedKeyValue())
              .setPage(1)
              .build();

            return service.get(query).pipe(
              tapResponse({
                next: (dto) => patchState(store, { page: dto }),
                error: (error: any) =>
                  patchState(store, { error: error.message }),
                finalize: () => patchState(store, { isLoading: false }),
              })
            );
          })
        )
      ),

      loadMore: rxMethod<void>(
        pipe(
          switchMap(() => {
            patchState(store, { isLoading: true, error: '' });
            const query = queryBuilder
              .setSearchField(store.searchField())
              .setSearchValue(store.searchValue())
              .setLocationId(store.locationId())
              .setStartDate(store.dateRange().start_date)
              .setEndDate(store.dateRange().end_date)
              .setSortValue(store.sorter().getSortedKeyValue())
              .setPage(store.page().page + 1)
              .build();

            return service.get(query).pipe(
              tapResponse({
                next: (dto) => {
                  patchState(store, {
                    page: {
                      ...dto,
                      result: [...store.page().result, ...dto.result],
                    },
                  });
                },
                error: (error: any) =>
                  patchState(store, { error: error.message }),
                finalize: () => patchState(store, { isLoading: false }),
              })
            );
          })
        )
      ),

      fetchLocations: rxMethod<void>(
        pipe(
          switchMap(() => {
            patchState(store, { isLoading: true, error: '' });

            return locationService.get().pipe(
              tapResponse({
                next: (dto) => {
                  const allLocations: LocationDto = {
                    id: 0,
                    name: 'All Locations',
                  };
                  patchState(store, {
                    locations: [allLocations, ...dto],
                  });
                },
                error: (error: any) =>
                  patchState(store, { error: error.message }),
                finalize: () => patchState(store, { isLoading: false }),
              })
            );
          })
        )
      ),

      setSearchField: (key: string) => {
        const searchField = store
          .searchFields()
          .find((field) => field.key === key);

        if (!searchField) return;

        patchState(store, { searchField: searchField.key });
      },

      setSearchValue: (searchValue: string) =>
        patchState(store, { searchValue }),

      setLocationId: (locationId: number) => patchState(store, { locationId }),

      setStartDate: (startDate: Date) =>
        patchState(store, {
          dateRange: { ...store.dateRange(), start_date: new Date(startDate) },
        }),

      setEndDate: (endDate: Date) =>
        patchState(store, {
          dateRange: { ...store.dateRange(), end_date: new Date(endDate) },
        }),
    })
  ),

  withComputed((store) => ({
    page: computed(() => store.page()),
    currentCount: computed(() => store.page().result.length),
    totalCount: computed(() => store.page().total),
    hasMoreRecords: computed(
      () => store.page().total > store.page().result.length
    ),

    searchFieldDisplay: computed(() => {
      const searchField = store
        .searchFields()
        .find((field) => field.key === store.searchField());

      return searchField ? searchField.display : '';
    }),
    startDateStr: computed(() => {
      if (!store.dateRange().start_date) return '';

      return moment(store.dateRange().start_date).format('YYYY-MM-DD');
    }),

    endDateStr: computed(() => {
      if (!store.dateRange().end_date) return '';

      return moment(store.dateRange().end_date).format('YYYY-MM-DD');
    }),

    locationName: computed(() => {
      if (store.locationId() === 0) return 'All Locations';

      const location = store
        .locations()
        .find((location) => location.id === store.locationId());

      return location ? location.name : '';
    }),

    list: computed(() => store.page().result),
  }))
);
