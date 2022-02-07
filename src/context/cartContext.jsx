import { useState } from "react/cjs/react.development";

const { createContext, useContext } = require("react");

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {

            const newItem = {item, quantity};
            setCart((prevState) => [...prevState, newItem])
    
        
    }


    return (

    <CartContext.Provider value={{cart, addItem, setCart}}>
        { children }
    </CartContext.Provider>

    )


}

export const useCart = () => useContext(CartContext)