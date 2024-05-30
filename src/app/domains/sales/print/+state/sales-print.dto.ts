export class SalesDetailDto {
  id = 0;
  location_transaction_id = 0;
  location_name = '';
  till_number = 0;
  sales_date = new Date();
  net_amount = 0;
  amount_paid = 0;
  commission_due = 0;
  note = '';
  entries: SalesDetailEntryDto[] = [];
  tenders: SalesDetailTenderEntryDto[] = [];
}

export interface SalesDetailEntryDto {
  id: number;
  inventory_id: number;
  inventory_name: string;
  quantity: number;
  cost_price: number;
  sales_price: number;
  total_cost_price: number;
  total_sales_price: number;
  comment: string;
}

export interface SalesDetailTenderEntryDto {
  id: number;
  tender_name: string;
  amount: number;
}
