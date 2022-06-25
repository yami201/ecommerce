import styled, {css} from "styled-components"
import { BaseButton } from "../../buttons/button.style.styles"


const goToLeft = css`
  transform: translateX(200px);
`
const goToRight = css`
  transform: translateX(-200px);
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AuthenticationContainer = styled.div`
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, #5b4f38 0%, #dba3a3 100%);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 800px;
  height: 480px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  color:white;
  letter-spacing: 1px;
  @media screen and (max-width:800px){
    visibility: hidden;
  }
`
export const OverlayPanel = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    font-size: 34px;
    margin-bottom:20px;
  }
  p{
    width:90%;
    font-size: 18px;
    margin-bottom: 20px;
  }

`
export const AuthButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid white;
  width: 50%;
  transition: 100ms ease-in;
  &:hover{
    background-color: unset;
    border: 1px solid white;
    color: white;
    opacity: 0.9;
  }
  &:active{
    transform: scale(0.95);
  }
`
export const MethodContainer = styled.div`
  width: 350px;
  height: 550px;
  color: black;
  background-color: white;
  position: absolute;
  z-index: 1000;
  border-radius: 20px;
  transition: transform 1s ease-in;

  @media screen and (min-width:800px){
    ${({state}) => state ? goToRight:goToLeft}
  }
  @media screen and (max-width:800px){
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    display: block;
  }
`
export const Question = styled.h3`
  position: absolute;
  transform: translate(60px,300px);
  color:#726562;
`