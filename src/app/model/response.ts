import { House } from "./house";
import { Page } from "./page";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: {page: Page , houses:House[]};
}