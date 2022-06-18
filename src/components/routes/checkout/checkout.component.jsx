import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from "./checkout.style"

import { useContext } from "react"
import { CartContext } from "../../../contexts/cart.context"
import CheckoutItem from "../../checkout-item/checkout-item.component"
const Checkout = () => {
    const { cartItems ,total} = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Products</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map( item => 
                <CheckoutItem key={item.id} item={item}/>
            )}
            <Total>Total = {total}$</Total>
        </CheckoutContainer>
    )
}
export default Checkout