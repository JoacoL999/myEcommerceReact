import { useState } from "react";

const { createContext, useContext } = require("react");

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {

            const newItem = {item, quantity};
            setCart((prevState) => [...prevState, newItem])
    
        
    }

    const removeHandler = (id) => {

        setCart((items) => items.filter((item) => item.item.id !== id));
        
    }


    return (

    <CartContext.Provider value={{cart, addItem, removeHandler}}>
        { children }
    </CartContext.Provider>

    )


}

export const useCart = () => useContext(CartContext)