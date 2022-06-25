import styled from "styled-components"

export const CheckoutContainer = styled.div`
  width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  user-select: none;
  @media screen and (max-width:800px){
    width: 95%;
    padding: 10px 0;
  }
  
`
export const CheckoutHeader = styled.header`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #726562;
`
export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  text-align: left;
  &:last-child {
    transform: translateX(-10px);
    width: 8%;
  }
`
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`