import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from "./checkout.style"
import { useSelector } from "react-redux"
import { selectCartItems , selectTotal} from "../../../store/cart/cart.selector"
import CheckoutItem from "../../checkout-item/checkout-item.component"
import PaymentForm from "../../payment-form/payment-form.component"
const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotal)

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
            <PaymentForm/>
        </CheckoutContainer>
    )
}
export default Checkout