export interface PageResponse<T> {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: { page: T };
}
// i have an error when a trying to access properties Page. the error say properties undeifine