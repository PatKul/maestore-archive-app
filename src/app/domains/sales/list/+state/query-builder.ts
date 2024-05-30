import { Injectable } from '@angular/core';
import moment from 'moment';

import { ISalesListQuery } from './sales-list.dto';
import { KeyValue } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class QueryBuilder {
  private _query: Partial<ISalesListQuery> = {};

  setSearchField(value: string): QueryBuilder {
    this._query.search_field = value;
    return this;
  }

  setSearchValue(value: string): QueryBuilder {
    this._query.search_value = value;
    return this;
  }

  setLocationId(value: number): QueryBuilder {
    this._query.location_id = value;
    return this;
  }

  setStartDate(value: Date): QueryBuilder {
    this._query.start_date = value;
    return this;
  }

  setEndDate(value: Date): QueryBuilder {
    this._query.end_date = value;
    return this;
  }

  setSortValue(value: KeyValue<string, string>): QueryBuilder {
    this._query.sort_by = value.key;
    this._query.order_by = value.value;
    return this;
  }

  setPage(page: number): QueryBuilder {
    this._query.page = page;
    return this;
  }

  build(): string {
    const list = [];

    if (this._query.search_field) {
      list.push(`search_field=${this._query.search_field}`);
    }

    if (this._query.search_value) {
      list.push(`search_value=${this._query.search_value}`);
    }

    if (this._query.location_id) {
      list.push(`location_id=${this._query.location_id}`);
    }

    if (this._query.start_date) {
      list.push(
        `start_date=${moment(this._query.start_date).format('YYYY-MM-DD')}`
      );
    }

    if (this._query.end_date) {
      list.push(
        `end_date=${moment(this._query.end_date).format('YYYY-MM-DD')}`
      );
    }

    if (this._query.sort_by) {
      list.push(`sort_by=${this._query.sort_by}`);
    }

    if (this._query.order_by) {
      list.push(`order_by=${this._query.order_by}`);
    }

    if (this._query.page) {
      list.push(`page=${this._query.page}`);
    }

    if (this._query.limit) {
      list.push(`limit=${this._query.limit}`);
    }

    return list.join('&');
  }
}
