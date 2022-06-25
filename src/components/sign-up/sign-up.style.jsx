import styled from "styled-components"
export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`
export const Title = styled.span`
    transform: translateY(-10px);
    color:#726562;
    font-size: 34px;
    margin-bottom:20px;
    text-transform: uppercase;
`
export const OrSpan = styled.span`
    color:#9a8e8b;
    font-size: 20px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 2px solid #726562;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 0 10px white;
    position: relative;
    transform: translateY(10px);
    z-index: 10;
`
export const OrLine = styled.span`
    background-color: #726562;
    width: 300px;
    height: 2px;
    position: absolute;
    border-radius: 20px;
    z-index: 0;
    transform: translateY(-95px);
`