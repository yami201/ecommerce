import styled from 'styled-components'
import { SpinnerContainer } from '../spinner/spinner.styles'

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #726562;
  color: white;
  text-transform: uppercase;
  font-family: 'Joan', serif;
  font-weight: bolder;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid #726562;
  }
`
export const GoogleSignInButton = styled(BaseButton)`
  transform: translateY(-10px);
  padding: 0;
  width: 220px;
  background-color: #726562;
  transition: 200ms ease;
  &:hover {
    background-color: transparent;
    border: 1px solid #726562;
    color: #726567;
  }
`
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid #726562;

  &:hover {
    background-color: #726562;
    color: white;
    border: none;
  }
`
export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height:30px;
`
export const SignButton = styled(BaseButton)`
  transform: translateX(60px);
  background-color: #726562;

  &:hover{
      border-color: #726562;
      color:#726562;
  }
`