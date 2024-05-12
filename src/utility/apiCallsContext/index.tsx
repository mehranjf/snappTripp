import { createContext, useState } from "react";
import { isEqual } from "lodash";
import { CachedApiCallContextType, CachedApiCallDataType } from "./type";

export const ApiCallContext = createContext({} as CachedApiCallContextType);
const ApiCallContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [apiCallData, setApiCallData] = useState([] as CachedApiCallDataType[])
    const addApiCall = (data: CachedApiCallDataType) => {
        setApiCallData([...apiCallData, data]);
    }
    const updateApiCall = (data: CachedApiCallDataType) => {
        const updateData = apiCallData.map(item => {
            if (isEqual(item.option, data.option)) {
                item.data = data.data
            }
            return item;
        });
        setApiCallData([...updateData]);
    }
    return (
        <ApiCallContext.Provider value={{ apiCallData, addApiCall, updateApiCall }}>
            {children}
        </ApiCallContext.Provider>
    )
}
export default ApiCallContextProvider;