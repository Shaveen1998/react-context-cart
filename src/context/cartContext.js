import { createContext, useState } from "react";

export const Cart = createContext()

const Context = ({children})=>{

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([])
    return(
        <Cart.Provider value={{cart, setCart, products, setProducts}}>
            {children}
        </Cart.Provider>
    )
}


export default Context;