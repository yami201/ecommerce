import { createContext , useEffect, useState } from "react";

const addItem = (cartItems,itemToAdd) => {
    const existingItem = cartItems.find( (item) => item.id === itemToAdd.id)
    
    if(existingItem) {
        return cartItems.map( item => 
            item.id === itemToAdd.id ? 
                {...item,quantity:item.quantity+1} 
                : 
                item)
    }
    return [...cartItems,{...itemToAdd,quantity:1}]
}

const clearItem = (cartItems,itemToRemove) => {
    return cartItems.filter( item => item.id !== itemToRemove.id)
}
const removeItem = (cartItems,itemToRemove) => {
    const existingItem = cartItems.find( item => item.id === itemToRemove.id)
    if(existingItem.quantity === 1){
        return clearItem(cartItems,itemToRemove)
    }
    return cartItems.map( (item) =>
            item.id === itemToRemove.id ?
                {...item, quantity: item.quantity - 1}
                :
                item) 
}
export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: () => {},
    cartCount:0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    total:0,
})
export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems , setCartItems] = useState([])
    const [cartCount , setCartCount] = useState(0)
    const [total,setTotal] = useState(0)

    
    useEffect(() => {
        const newCartCount = cartItems.reduce( (res,item) => 
            res+item.quantity, 0)

        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newTotal = cartItems.reduce( (res,item) => 
            res + item.price*item.quantity,0)

        setTotal(newTotal)
    }, [cartItems])


    const clearItemFromCart = (itemToRemove) => {
        setCartItems(clearItem(cartItems,itemToRemove))
    }
    const removeItemFromCart = (itemToRemove) => {
        setCartItems(removeItem(cartItems,itemToRemove))
    }
    const addItemToCart = (itemToAdd) => {
        setCartItems(addItem(cartItems,itemToAdd))
    }
    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        total,
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}