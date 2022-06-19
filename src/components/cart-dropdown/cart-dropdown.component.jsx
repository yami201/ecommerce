import {CartDropdownContainer , EmptyMsg , CartItems} from "./cart-dropdown.style"
import Button from "../buttons/button.component"
import CartItem from "../cart-item/cart-item.component"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import { useNavigate } from "react-router-dom"
const CartDropdown = () => {
    const navigate = useNavigate()
    const cartItems  = useSelector(selectCartItems)

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? 
                    (cartItems.map( (cartItem) => 
                        <CartItem key={cartItem.id} item={cartItem}/>
                    )) : (<EmptyMsg>Your cart is empty</EmptyMsg>)
                }
                
            </CartItems>
            <Button onClick={() => navigate("/checkout")}>Go to checkout</Button>
        </CartDropdownContainer>
    )
}
export default CartDropdown