import { HouseType } from "./enumeration/house-type";

export interface House {
    id:number;
    houseType:HouseType;
    rentPrice: number;
    numBedrooms:number;
    numBathrooms:number;
    address:string;
    city:string;
    imageUrl:string;
}
