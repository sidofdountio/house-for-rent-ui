import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { CustomResponse } from '../model/response';
import { HouseType } from '../model/enumeration/house-type';
import { House } from '../model/house';
import { ResponseData } from '../model/responseData';


@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private readonly URL = environment.URL;

  constructor(private http: HttpClient) { }

  // Pagination reative aproache
  housePagination$ = (houseType: HouseType, pageNumber: number, pageSize: number) => <Observable<ResponseData>>
    this.http.get<ResponseData>(`${this.URL}/${houseType}/${pageNumber}/${pageSize}`)
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      );

  // Pagination 
  housePagination(houseType: HouseType, pageNumber: number, pageSize: number): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.URL}/${houseType}/${pageNumber}/${pageSize}`)
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      );
  }

  //Fetch house
  houses(): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.URL}`)
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      );
  }

  // House without paination.
  houses$ = (houseType: HouseType = HouseType.APARTMENT, pageNumber: number=0, pageSize: number=10) => <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.URL}/${houseType}/${pageNumber}/${pageSize}`)
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      );


  saveHouse$ = (house: House) => <Observable<CustomResponse>>
    this.http.post<CustomResponse>(`${this.URL}`, house)
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      );

  handlerError(error: HttpErrorResponse): Observable<never> {
    throw new Error(`An error occured - Error code :${error.message}`);
  }
}
