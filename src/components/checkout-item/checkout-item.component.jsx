import { useDispatch , useSelector } from "react-redux"
import { useCallback , memo} from "react"
import { addItemToCart , removeItemFromCart, clearItemFromCart} from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"
import {
    CheckoutItemContainer,
    ImageContainer,
    Info,
    Quantity,
    Arrow,
    Value,
    RemoveBtn,
} from "./checkout-item.style"
const CheckoutItem = memo(({item}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => selectCartItems(state))

    const { name ,imageUrl , price , quantity} = item
    const addItemHandler = useCallback(() => dispatch(addItemToCart(cartItems,item)),[cartItems,item])
    const removeItemHandler = useCallback(() => dispatch(removeItemFromCart(cartItems,item)),[cartItems,item])
    const clearItemHandler = useCallback(() => dispatch(clearItemFromCart(cartItems,item)))
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <Info> {name}</Info>
            <Quantity>
                <Arrow
                    onClick={removeItemHandler}
                    >&#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow
                    onClick={addItemHandler}>&#10095;
                </Arrow>
            </Quantity>
            <Info>{price}</Info>
            <RemoveBtn 
                onClick={clearItemHandler}
                >&#10005;
            </RemoveBtn>
        </CheckoutItemContainer>
    )
})
export default CheckoutItem