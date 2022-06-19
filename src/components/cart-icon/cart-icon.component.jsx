import {CartIconContainer , ItemCount , ShoppingBag} from "./cart-icon.style.jsx"
import { useSelector , useDispatch} from "react-redux"
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector.js"
import { setIsCartOpen } from "../../store/cart/cart.action.js"
const CartIcon = () => {
    const dispatch = useDispatch()
    
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    const handleClick = () => dispatch(setIsCartOpen(!isCartOpen))
    return (
        <CartIconContainer onClick={handleClick}>
            <ShoppingBag/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon