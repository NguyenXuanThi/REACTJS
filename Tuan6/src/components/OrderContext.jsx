import { createContext, useState, useContext } from "react";
const OrderContext = createContext();
export function
OrderProvider({children}){
    const[order, setOrder] = useState([]);
    const addToOrder = (item) => {
        setOrder([...order, item]);
    };
    return(
        <OrderContext.Provider value = {{order, addToOrder}}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrder(){
    return useContext(OrderContext);
}