import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { House } from '../model/house';
import { BehaviorSubject, catchError, map, Observable, of, startWith } from 'rxjs';
import { AppState } from '../model/app-state';
import { CustomResponse } from '../model/response';
import { HouseService } from '../service/house.service';
import { DataState } from '../model/enumeration/data-state';
import { HouseType } from '../model/enumeration/house-type';
import { ResponseData } from '../model/responseData';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  // private dataSubject = new BehaviorSubject<CustomResponse>(null);
  private lenghSubject = new BehaviorSubject<number>(0);
  lenghValue$ = this.lenghSubject.asObservable();

  readonly HouseType = HouseType;
  readonly houseType = HouseType.APARTMENT;
  length = 0;//page size
  pageSize = 10;//page number
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  pageEvent: PageEvent;

  readonly DataState = DataState;
  housePage$: Observable<AppState<ResponseData>>;
  houses$: Observable<AppState<CustomResponse>>;
  houses: House[] = [];
  selectedValue: string = "";
  filterForm = this.fbuild.group({
    houseType: ['']
  });


  constructor(private service: HouseService, private fbuild: FormBuilder) { }

  ngOnInit(): void {

    this.housePage$ = this.service.housePagination$(HouseType.APARTMENT, this.pageIndex, this.pageSize)
      .pipe(
        map(response => {
          var lenght = response.data.houses.content.length;
          this.length = lenght;

          return { dataState: DataState.LOADED_STATE, appData: response }
        }),
        startWith({ dataState: DataState.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dataState: DataState.ERROR_STATE, error });
        })
      );
  }

  // Filter house by HouseType.
  filterHouseByType($event: HouseType) {
    console.log("value :" + $event);
    this.onFilterHouse($event, this.pageIndex, this.pageSize);
  }

  // Reactive
  geHouses(): void {
    this.houses$ = this.service.houses$()
      .pipe(
        map(response => {
          return { dataState: DataState.LOADED_STATE, appData: response }
        }),
        startWith({ dataState: DataState.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dataState: DataState.ERROR_STATE, error });
        })
      );
  }

  onFilterHouse(houseType: HouseType, pageNumber: number, pageSize: number): void {
    this.housePage$ = this.service.housePagination$(houseType, pageNumber, pageSize)
      .pipe(
        map(response => {
          this.length = response.data.houses.content.length;
          return { dataState: DataState.LOADED_STATE, appData: response }
        }),
        startWith({ dataState: DataState.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dataState: DataState.ERROR_STATE, error })
        })
      );
  }

  onSelectPageNumber(pageNumber: number, pageSize: number): void {
    this.housePage$ = this.service.housePagination$(HouseType.STUDIO, pageNumber, pageSize)
      .pipe(
        map(response => {
          console.log("hello")
          return { dataState: DataState.LOADED_STATE, appData: response }
        }),
        startWith({ dataState: DataState.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dataState: DataState.ERROR_STATE, error })
        })
      );
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.onSelectPageNumber(e.pageIndex, e.pageSize);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onToggleFavorite(house: House) {

  }

  getLenghtOfList(lenght: number) {
    return lenght;
  }
}
