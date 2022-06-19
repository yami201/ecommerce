import { createSelector } from "reselect"

const selectCartReducer = state => state.cart 

export const selectCartItems = createSelector(
    [selectCartReducer],
    cart => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    cart => cart.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartReducer],
    cart => cart.cartItems.reduce( 
        (res,item) => res+item.quantity, 0
    )
)

export const selectTotal = createSelector(
    [selectCartReducer],
    cart => cart.cartItems.reduce( 
    (res,item) => res + item.price*item.quantity,0)
)
