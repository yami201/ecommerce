import styled from "styled-components"


export const CategoriesContainer = styled.div`
width: 100%;
  display: grid;
  grid-template-columns:repeat(6,1fr);

  @media screen and (max-width:800px){
    display: grid;
    grid-template-columns: auto;
  }
`