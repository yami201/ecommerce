import { cartActionTypes } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils"

// AddItem Method

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
export const addItemToCart = (cartItems,itemToAdd) => {
    const newCartItems = addItem(cartItems,itemToAdd)
    return createAction(cartActionTypes.setCartItems,newCartItems)
}


// ClearItem Method

const clearItem = (cartItems,itemToRemove) => {
    return cartItems.filter( item => item.id !== itemToRemove.id)
}
export const clearItemFromCart = (cartItems,itemToRemove) => {
    const newCartItems = clearItem(cartItems,itemToRemove)
    return createAction(cartActionTypes.setCartItems,newCartItems)
}


//removeItem Method

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
export const removeItemFromCart = (cartItems,itemToRemove) => {
    const newCartItems = removeItem(cartItems,itemToRemove)
    return createAction(cartActionTypes.setCartItems,newCartItems)
}



export const updateCartItems = (newCartItems) => {
    createAction(
        cartActionTypes.setCartItem,
        {
            cartItems:newCartItems,
        }
    )
} 

export const setIsCartOpen = (bool) => createAction(cartActionTypes.toggleIsCartOpen,bool)