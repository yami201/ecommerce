import styled from "styled-components"

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
  }
`
export const Info = styled.span`
  width: 23%;
`
export const Quantity = styled.span`
  width: 23%;
  display: flex;
`
export const Arrow = styled.div`
  cursor: pointer;
`
export const Value = styled.div`
  margin:  0 10px;
`
export const RemoveBtn = styled.div`
  padding-left: 12px;
  cursor: pointer;
  transform: translateX(-10px);
`
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 28px;
  align-items: center;

  @media screen and (max-width:800px){
    font-size: 24px;
  }
`