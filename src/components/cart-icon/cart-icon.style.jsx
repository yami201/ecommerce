import styled from "styled-components"
import {ReactComponent as ShoppingSvg} from "../../assets/shopping-bag.svg"

export const ShoppingBad = styled(ShoppingSvg)`
    width: 30;
    height: 30px;
`
export const CartIconContainer = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const ItemCount = styled.span`
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    bottom: 5px;
`