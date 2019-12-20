export default interface IArray<T> {
    statusCode: string;
    message: string;
    devMessage: string;
    data: {
        items: T[];
        totalItems: number;
    };
    errors?: any;
}