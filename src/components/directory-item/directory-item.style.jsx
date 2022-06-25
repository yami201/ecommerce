import styled from "styled-components"


export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl})=> `url(${imageUrl})`};
`
export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: rgb(252,234,233);
  color:#726562;
  opacity: 0.7;
  position: absolute;
  h2 {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #4a4a4a;
    }
  p {
    font-weight: lighter;
    font-size: 16px;
  }
`
export const DirectoryItemContainer = styled.div`
  ${({id}) => id<4 ? `grid-column:span 2;` : `grid-column: span 3;`};
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${BackgroundImage}{
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body}{
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width:800px){
    width: 95vw;
    height: 200px;
  }
`