import { useState, useEffect, useCallback, useContext } from "react";
import axios, { AxiosError } from "axios";
import { isEqual } from "lodash";
import { UseAxiosProps, UseAxiosState } from "./type";
import { ApiCallContext } from "../apiCallsContext";
const useApi = <T>(Config?: UseAxiosProps): UseAxiosState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { apiCallData, addApiCall, updateApiCall } = useContext(ApiCallContext)
  const fetchData = useCallback(async (config: UseAxiosProps, updateMode = false) => {
    if (loading) return;
    try {
      setLoading(true);
      const response = await axios(config);
      setData(response.data);
      if (updateMode) {
        updateApiCall({ data: response.data, option: config });
      }
      else {
        addApiCall({ data: response.data, option: config });

      }
      setError(null);
    } catch (error: unknown) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const refetch = () => {
    if (Config) {
      fetchData(Config, true);
    }
  };

  useEffect(() => {
    if (Config) {
      const findedItem = apiCallData.find(item => isEqual(item.option, Config))
      if (findedItem) {
        setData(findedItem.data)
      }
      else {
        fetchData(Config);
      }
    }

  }, []);

  return { data, error, loading, refetch };
};
export default useApi;
