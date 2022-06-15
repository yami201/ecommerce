import "./cart-dropdown.style.scss"
import Button from "../buttons/button.component"
import CartItem from "../cart-item/cart-item.component"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map( (cartItem) => 
                    <CartItem key={cartItem.id} item={cartItem}/>
                )}
            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}
export default CartDropdown