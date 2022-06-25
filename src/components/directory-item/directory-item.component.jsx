import {DirectoryItemContainer, BackgroundImage , Body} from './directory-item.style'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
const DirectoryItem = ({category}) => {
  const navigate = useNavigate()
  const {imageUrl, title, route, id} = category
  const navigateHandler = useCallback(() => navigate(route),[route])
  return (
    <DirectoryItemContainer id={id} onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl}/>
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
