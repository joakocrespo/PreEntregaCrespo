import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ( {children} ) => {
    const {cartList, setCartList} = useState([]);
    const addToCart = (item, qty) => {

    }
return (
    <CartContext.Provider>
        {children}
    </CartContext.Provider>
);
}