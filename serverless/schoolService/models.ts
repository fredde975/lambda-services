export interface IResponsePayload {
  message: string;
  event: any;
}

export interface IQueryParameters {
  foo: string;
}

export interface IEventPayload {
  method: string;
  query: IQueryParameters;
}

export interface ICallback {
  (error: any, result: IResponsePayload): void;
}

export interface ICallback2 {
    (error: any, result: IResponse): void;
}

export interface IResponse {
   statusCode: number,
   body: string
}
// const response = {
//   statusCode: 200,
//   body: JSON.stringify({
//     message: 'Go Serverless v1.0! Your function executed successfully!',
//     input: event,
//   }),
// };
