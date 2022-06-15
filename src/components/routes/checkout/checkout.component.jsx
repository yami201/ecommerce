import "./checkout.style.scss"

import { useContext } from "react"
import { CartContext } from "../../../contexts/cart.context"
import CheckoutItem from "../../checkout-item/checkout-item.component"
const Checkout = () => {
    const { cartItems ,total} = useContext(CartContext)

    return (
        <div className="checkout-container">
            <header className="checkout-header">
                <div className="header-block">
                    <span>Products</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </header>
            {cartItems.map( item => 
                <CheckoutItem key={item.id} item={item}/>
            )}
            <span className="total">Total = {total}$</span>
        </div>
    )
}
export default Checkout