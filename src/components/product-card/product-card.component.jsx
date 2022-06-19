import {ProductCardContainer ,Footer , Name , Price} from './product-card.style.jsx'
import Button, {buttonClassTypes} from "../buttons/button.component"
import { useSelector , useDispatch} from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector.js'
import { addItemToCart } from '../../store/cart/cart.action.js'
const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const {name,price,imageUrl} = product
    const addProduct = () => dispatch(addItemToCart(cartItems,product))

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={buttonClassTypes.inverted} onClick={addProduct}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard