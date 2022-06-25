import styled from "styled-components"
import { Link } from "react-router-dom";

export const Title = styled(Link)`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: center;
  color: #726562;
`
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media screen and (max-width:800px){
    grid-template-columns: 1fr 1fr;
  }
`
export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width:800px){
    align-items: center;
    
  }
`