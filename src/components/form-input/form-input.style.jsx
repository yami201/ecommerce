import styled , {css} from "styled-components"

const mainColor = '#726562'


const shrinkLabelStyles = css`
  left:20px;
  top: -10px;
  font-size: 12px;
  color: ${mainColor};
  background-color: white;
  padding: 4px;
  border-left: 1px solid ${mainColor};
  border-right: 1px solid ${mainColor};
  border-radius: 5px;
`
export const InputLabel = styled.label`
  color: ${mainColor};
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  pointer-events: none;
  left: 7px;
  top: 10px;
  transition: 300ms ease all;

  ${({shrink}) => shrink && shrinkLabelStyles}
`
export const InputForm = styled.input`
  background-color: transparent;
  color: ${mainColor};
  font-size: 20px;
  padding: 10px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${mainColor};
  letter-spacing: 1px;
  border-radius: 20px;
  margin: 0;
  &:focus {
    outline: none;
    border: none;
    
    border: 1px solid ${mainColor};
    transition: 500ms all ease;
  }

  &:focus ~ ${InputLabel} {
    ${shrinkLabelStyles};
  }
`
export const Group = styled.div`
  position: relative;
  margin: 20px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`