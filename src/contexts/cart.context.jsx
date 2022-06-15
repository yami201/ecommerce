import { createContext , useEffect, useState } from "react";

const addItem = (cartItems,itemToAdd) => {
    const itemExistence = cartItems.find( (item) => item.id === itemToAdd.id)
    
    if(itemExistence) {
        return cartItems.map( (item) => 
            item.id === itemToAdd.id ? 
                {...item,quantity:item.quantity+1} 
                : 
                item)
    }
    return [...cartItems,{...itemToAdd,quantity:1}]
}
export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: () => {},
    cartCount:0,
})
export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems , setCartItems] = useState([])
    const [cartCount , setCartCount] = useState(0)
    useEffect(() => {
        const newCartCount = cartItems.reduce( (total,item) => total+item.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (itemToAdd) => {
        setCartItems(addItem(cartItems,itemToAdd))
    }
    const value = {isCartOpen,setIsCartOpen,cartItems,addItemToCart,cartCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}