import { createContext, useContext } from "react";

const crossContext = createContext({
    click: false,
    setClick: ()=>{},
    user: {},
    myUser: ()=>{},
    userPhone: '',
    prodCount: 0,
    myProdCount: ()=>{}
})



export const CrossContextProvider = crossContext.Provider;

export const useCrossContext = ()=>{
    return useContext(crossContext);
}
