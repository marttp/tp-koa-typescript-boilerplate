export default interface IResponse<T> {
    statusCode: string;
    message: string;
    devMessage: string;
    data: T;
    errors?: any;
}