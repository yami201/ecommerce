import {ProductCardContainer ,Footer , Name , Price} from './product-card.style.jsx'
import Button, {buttonClassTypes} from "../buttons/button.component"
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
const ProductCard = ({product}) => {
    const { addItemToCart } = useContext(CartContext)
    const {name,price,imageUrl} = product
    const addProduct = () => addItemToCart(product)

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