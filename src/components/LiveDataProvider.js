import {createContext} from "react";
import useLiveData from "../hooks/useLiveData";

export const LiveDataContext = createContext({});

export default function LiveDataProvider({children}) {

    const {sendAction} = useLiveData();

    return (
        <LiveDataContext.Provider value={{sendAction}}>
            {children}
        </LiveDataContext.Provider>
    )
}