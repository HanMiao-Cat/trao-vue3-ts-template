declare interface ResponseOk {
  msg: string;
  code: number;
}

declare interface ResponseData<T> extends ResponseOk {
  data: T;
}

declare namespace Params {}

declare namespace Api {}
