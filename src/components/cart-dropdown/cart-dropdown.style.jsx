import styled from "styled-components"
import { BaseButton, GoogleSignInButton, InvertedButton } from "../buttons/button.style.styles"

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 9999;

    ${BaseButton}{
        transform: translateY(10px);
    }
`
export const EmptyMsg = styled.span`
    font-size:18px;
    margin:50px auto;

`
export const CartItems = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
`