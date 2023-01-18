declare interface ResponseOk {
  code: number;
}

type PagingLimit = {
  limit: number;
};

type PagingOffset = {
  offset: number;
};

declare type PagingData = PagingLimit & PagingOffset;

declare interface ResponseData<T> extends ResponseOk {
  data: T;
}

declare namespace Params {
  interface IMvParams extends PagingData {
    order?: string;
  }
}

declare namespace Api {
  interface IMvDataItem {
    artistId: number;
    artistName: string;
    artists: Array<{
      alias: string[];
      id: number;
      name: string;
      transNames: null;
    }>;
    briefDesc: null;
    cover: string;
    desc: null;
    duration: number;
    id: number;
    mark: number;
    name: string;
    playCount: number;
    subed: boolean;
  }
  interface IMvData extends ResponseOk {
    count: number;
    data: IMvDataItem[];
    hasMore: boolean;
  }
}
