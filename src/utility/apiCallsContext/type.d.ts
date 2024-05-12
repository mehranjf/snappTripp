import { UseAxiosProps } from "../useApi/type";

export interface CachedApiCallDataType {
    option: UseAxiosProps;
    data: unknown
}
export interface CachedApiCallContextType {
    apiCallData: CachedApiCallDataType[];
    addApiCall: (data: CachedApiCallDataType) => void;
    updateApiCall: (data: CachedApiCallDataType) => void;
}