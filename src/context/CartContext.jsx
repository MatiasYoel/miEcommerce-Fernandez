import React, { createContext, useState } from 'react'
export const CarritoContext = createContext();

const CartContext = ({children}) => {
    const [cart,setCart] = useState([]);
return (
    <CartContext.Provider value={{cart,setCart}}>{children}</CartContext.Provider>
)
};

export default CartContext
