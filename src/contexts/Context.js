import { createContext, useContext } from "react";

const crossContext = createContext({
    click: false,
    setClick: ()=>{},
    user: {},
    myUser: ()=>{},
    userPhone: '',
    setUserPhone: ()=>{},
    prodCount: 0,
    setProdCount: ()=>{},
    isLoggedIn: false,
    setIsLoggedIn: ()=>{},
    forPaymentProd: {},
    setForPaymentProd: ()=>{}
})



export const CrossContextProvider = crossContext.Provider;

export const useCrossContext = ()=>{
    return useContext(crossContext);
}
