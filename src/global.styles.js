import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: 0;
        margin: 0;
    }
    body {
        background-color: rgb(252,234,233);
        padding: 20px 40px;
        font-family: 'Joan', serif;
        color:#726562;
        @media screen and (max-width:800px) {
            padding: 5px;
        }
    }
    a {
        text-decoration: none;
    }
`
export default GlobalStyle