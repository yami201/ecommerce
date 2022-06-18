import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import {
    CheckoutItemContainer,
    ImageContainer,
    Info,
    Quantity,
    Arrow,
    Value,
    RemoveBtn,
} from "./checkout-item.style"
const CheckoutItem = ({item}) => {
    const { name , 
        imageUrl , 
        price , 
        quantity
    } = item
    const {removeItemFromCart,
        addItemToCart,
        clearItemFromCart,
    } = useContext(CartContext)
    const addItemHandler = () => addItemToCart(item)
    const removeItemHandler = () => removeItemFromCart(item)
    const clearItemHandler = () => clearItemFromCart(item)
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
}
export default CheckoutItem