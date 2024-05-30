/**
 * Interface for the 'SalesList' data
 * @param search_field {string} The field to search
 * @param search_value {string} The value to search
 * @param location_id {number} The location id
 * @param start_date {Date} The start date
 * @param end_date {Date} The end date
 * @param page {number} The page number
 * @param limit {number} The limit
 */
export interface ISalesListQuery {
  search_field: string;
  search_value: string;
  location_id: number;
  start_date: Date;
  end_date: Date;
  sort_by: string;
  order_by: string;
  page: number;
  limit: number;
}

/**
 * Interface for the 'SalesList' data
 * @param id {number} The id
 * @param location_transaction_id {number} The location transaction id
 * @param location_name {string} The location name
 * @param till_number {number} The till number
 * @param sales_date {Date} The sales date
 * @param net_amount {number} The net amount
 * @param amount_paid {number} The amount paid
 * @param commission_due {number} The commission due
 * @param note {string} The note
 */
export interface SalesListDto {
  id: number;
  location_transaction_id: number;
  location_name: string;
  till_number: number;
  sales_date: Date;
  net_amount: number;
  amount_paid: number;
  commission_due: number;
  note: string;
}

/**
 * Interface for the 'Location' data
 * @param id {number} The id
 * @param name {string} The name
 */
export interface LocationDto {
  id: number;
  name: string;
}
