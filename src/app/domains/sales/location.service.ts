import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { HttpErrorDto, HttpResponseDto } from '../../common';
import { LocationDto } from './list/+state/sales-list.dto';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private http = inject(HttpClient);

  serverUrl = 'http://localhost:8080';

  /**
   * Get locations
   * @returns Observable<LocationDto[]>
   */
  get(): Observable<LocationDto[]> {
    const url = `${this.serverUrl}/location`;

    return this.http.get<HttpResponseDto<LocationDto[]>>(url).pipe(
      map((dto) => dto.data || []),
      catchError((error: HttpErrorDto) => throwError(() => error))
    );
  }
}
