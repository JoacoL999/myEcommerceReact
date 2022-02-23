import { useState, useEffect } from "react";

const { createContext, useContext } = require("react");

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [cartPrice, setPrice] = useState(0)

    
    const addItem = (item, quantity) => {

            const newItem = {item, quantity};

                setCart((prevState) => [newItem, ...prevState])            
            totalPrice(newItem);
    
        
    }

    const removeHandler = (id) => {


          
        
        
        var total = cartTotal
        setCart((items) => items.filter((item) => item.item.id !== id));
        for (let index = 0; index < cart.length; index++) {
            var item = cart.length;
            total =-- item
       }
        setCartTotal(total)

        const ddd = cart.filter((item) => item.item.id === id);
        
        for (const asd of ddd) {
            
            var price = (((asd.item?.price_overview.initial * 1.29) * asd?.quantity + '0')).toLocaleString('es')
            total = cartPrice - price 
        }
        setPrice(total)
      
    }

    useEffect(() => {
        
        const totalItem = () => {
            let total = 0;
            cart.forEach((order) => {

                total += order.quantity;
            });
            setCartTotal(total)
        };
        totalItem();
    }, [cart])


    const totalPrice = (newItem) => {
        
        var total;
        var price = (((newItem.item.price_overview?.initial * 1.29) * newItem?.quantity + '0')).toLocaleString('es')
        total =  parseInt(cartPrice) + parseInt(price)
        setPrice(total)
        
    }


    const clear = () => {

        setCart([]);

    } 


    return (

    <CartContext.Provider value={{cart, addItem, removeHandler, cartTotal, cartPrice, clear}}>
        { children }
    </CartContext.Provider>

    )


}

export const useCart = () => useContext(CartContext)