export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    sorted: boolean;
    empty: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

export interface House {
  id: number;
  houseType: string;
  address: string;
  city: string;
  numBedrooms: number;
  numBathrooms: number;
  rentPrice: number;
  imageUrl: string | null;
}

export interface HousesData {
  totalPages: number;
  totalElements: number;
  pageable: Pageable;
  size: number;
  content: House[];
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface ResponseData {
  timeStamp: string;
  statusCode: number;
  status: string;
  message: string;
  data: {
    houses: HousesData, houseList?:House[]
  };
}