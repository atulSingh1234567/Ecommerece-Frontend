import { createContext, useContext } from "react";

const crossContext = createContext({
    click: false,
    setClick: ()=>{},
})

export const CrossContextProvider = crossContext.Provider;

export const useCrossContext = ()=>{
    return useContext(crossContext);
}
