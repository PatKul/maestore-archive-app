import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { HttpErrorDto, HttpPaginatedDto, HttpResponseDto } from '../../common';
import { SalesListDto } from './list/+state/sales-list.dto';
import { SalesDetailDto } from './print/+state/sales-print.dto';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private http = inject(HttpClient);

  serverUrl = 'http://localhost:8080';

  /**
   * Get paginated result of sales
   * @param query
   * @returns Observable<HttpResponseDto<HttpPaginatedDto<SalesListDto>>>
   */
  get(query: string): Observable<HttpPaginatedDto<SalesListDto>> {
    const url = `${this.serverUrl}/sale?${query}`;

    return this.http
      .get<HttpResponseDto<HttpPaginatedDto<SalesListDto>>>(url)
      .pipe(
        map((dto) => {
          const decodedDto = new HttpResponseDto<
            HttpPaginatedDto<SalesListDto>
          >(dto);

          return decodedDto.data || new HttpPaginatedDto<SalesListDto>();
        }),
        catchError((error: HttpErrorDto) => throwError(() => error))
      );
  }

  /**
   * Get sale by id
   * @param id
   * @returns Observable<HttpResponseDto<SalesDetailDto>>
   */
  getById(id: string): Observable<HttpResponseDto<SalesDetailDto>> {
    const url = `${this.serverUrl}/sale/${id}`;

    return this.http
      .get<HttpResponseDto<SalesDetailDto>>(url)
      .pipe(catchError((error: HttpErrorDto) => throwError(() => error)));
  }
}
