import { cartActionTypes } from "./cart.types"

export const cartInitialState = {
    isCartOpen:false,
    cartItems:[],
}
export const cartReducer = (state=cartInitialState,action) => {
    const {type,payload} = action
    switch(type){
        case cartActionTypes.setCartItems:
            return {
               ...state,
               cartItems:payload,
            }
        case cartActionTypes.toggleIsCartOpen:
            return {
                ...state,
                isCartOpen:payload
            }
        default:
            return state
    }
}