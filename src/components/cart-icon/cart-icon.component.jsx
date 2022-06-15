import "./cart-icon.style.scss"
import {ReactComponent as ShoppingBag} from "../../assets/shopping-bag.svg"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"
const CartIcon = () => {
    const {isCartOpen , setIsCartOpen , cartCount} = useContext(CartContext)
    const handleClick = () => setIsCartOpen(!isCartOpen)
    return (
        <div className="cart-icon-container" onClick={handleClick}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}
export default CartIcon