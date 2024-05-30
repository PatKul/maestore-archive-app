/*********************************************************
 * Http payloads
 */

/**
 * Interface for the HTTP response
 * @param isError: boolean
 * @param message: string
 * @param data: T
 */
export interface IHttpResponse<T> {
  isError: boolean;
  message: string;
  data?: T;
}

/**
 * Pagination section
 * PageListResult<T>, PageListDto<T>, PageBuilder
 */
export interface PageListResult<T> {
  page: number;
  page_count: number;
  total_count: number;
  data: T[];
}

abstract class PageListDto<T> implements PageListResult<T> {
  page = 1;
  page_count = 1;
  total_count = 0;
  data: T[] = [];
}

export class PageBuilder {
  public readonly pageNumber: number = 1;
  public readonly limit: number = 10;
  public readonly offset: number = 0;
  public readonly pageCount: number = 1;

  /**
   * Constructor
   */
  constructor(pageSize: number, pageNumber: number) {
    this.pageNumber = pageNumber;
    this.limit = pageSize;
    this.offset = pageNumber < 1 ? 1 : (pageNumber - 1) * pageSize;
  }

  public encodeResult<T>(recordCount: number, list: T[]): PageListResult<T> {
    return {
      page: this.pageNumber,
      page_count: this.limit > 0 ? Math.ceil(recordCount / this.limit) : 1,
      total_count: recordCount,
      data: list,
    };
  }
}
