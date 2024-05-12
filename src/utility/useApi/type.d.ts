import  { AxiosRequestConfig } from 'axios';
export interface UseAxiosProps {
    url: string;
    options?: AxiosRequestConfig;
  }
  
  export interface UseAxiosState<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
    refetch: () => void;
  }