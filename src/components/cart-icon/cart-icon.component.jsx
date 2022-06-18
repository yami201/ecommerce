import {CartIconContainer , ItemCount , ShoppingBad} from "./cart-icon.style.jsx"
import {ReactComponent as ShoppingBag} from "../../assets/shopping-bag.svg"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"
const CartIcon = () => {
    const {isCartOpen , setIsCartOpen , cartCount} = useContext(CartContext)
    const handleClick = () => setIsCartOpen(!isCartOpen)
    return (
        <CartIconContainer onClick={handleClick}>
            <ShoppingBag/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon