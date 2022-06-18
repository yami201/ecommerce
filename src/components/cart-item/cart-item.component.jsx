import {CartItemContainer ,ItemDetails , Name} from "./cart-item.style"

const CartItem = ({item}) => {
    const  { name , quantity , imageUrl , price} = item
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span>{quantity} x {price}$</span>
            </ItemDetails>
            
        </CartItemContainer>
    )
}
export default CartItem