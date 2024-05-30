export class HttpResponseDto<T> {
  data?: T;
  message: string;
  code: string;

  constructor(data?: Partial<HttpResponseDto<T>>) {
    this.data = data?.data;
    this.message = data?.message ? data.message : '';
    this.code = data?.code ? data.code : '';
  }
}

export class HttpPaginatedDto<T> {
  result: T[];
  page: number;
  limit: number;
  total: number;

  /**
   *
   */
  constructor(data?: HttpPaginatedDto<T>) {
    this.result = data?.result ? data.result : [];
    this.page = data?.page ? data.page : 1;
    this.limit = data?.limit ? data.limit : 0;
    this.total = data?.total ? data.total : 0;
  }
}

export class HttpErrorDto {
  message: string;
  code: number;

  constructor(message: string, status: number) {
    this.message = message;
    this.code = status;
  }
}
