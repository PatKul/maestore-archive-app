import { KeyValue } from '@angular/common';
import { SearchField } from '../../../../common';
import { SortField, SortOrderEnum } from '../../../../common/definitions';

export const searchFields = [
  new SearchField({
    key: 'sales_note',
    display: 'Sales Note',
    value: true,
  }),
  new SearchField({
    key: 'entry_comment',
    display: 'Entry Comment',
  }),
];

export enum SearchFieldEnum {
  SalesNote = 'sales_note',
  EntryComment = 'entry_comment',
}

/*********************************************************
 * Transaction sorting functions
 */
export enum SortFieldName {
  SalesDate = 'sales_date',
  LocationSalesNumber = 'location_transaction_id',
  AmountPaid = 'amount_paid',
}

export class SalesSorter {
  public salesDate = new SortField(SortFieldName.SalesDate, SortOrderEnum.Desc);
  public locationSalesNumber = new SortField(SortFieldName.LocationSalesNumber);
  public amountPaid = new SortField(SortFieldName.AmountPaid);

  /**
   * Toggle sort field
   * @param name
   */
  public toggle(name: string) {
    //this.reset();

    switch (name) {
      case SortFieldName.SalesDate:
        this.salesDate.toggle();
        this.locationSalesNumber.reset();
        this.amountPaid.reset();

        break;
      case SortFieldName.LocationSalesNumber:
        this.locationSalesNumber.toggle();
        this.salesDate.reset();
        this.amountPaid.reset();

        break;

      case SortFieldName.AmountPaid:
        this.amountPaid.toggle();
        this.salesDate.reset();
        this.locationSalesNumber.reset();

        break;
    }
  }

  public getSortedKeyValue(): KeyValue<string, string> {
    if (!this.salesDate.hasNoSort)
      return {
        key: SortFieldName.SalesDate,
        value: this.salesDate.order,
      };

    if (!this.locationSalesNumber.hasNoSort)
      return {
        key: SortFieldName.LocationSalesNumber,
        value: this.locationSalesNumber.order,
      };

    if (!this.amountPaid.hasNoSort)
      return { key: SortFieldName.AmountPaid, value: this.amountPaid.order };

    return {
      key: SortFieldName.SalesDate,
      value: this.salesDate.order,
    };
  }
}
