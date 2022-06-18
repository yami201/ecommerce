import {DirectoryItemContainer, BackgroundImage , Body} from './directory-item.style'
import { useNavigate } from 'react-router-dom'
const DirectoryItem = ({category}) => {
  const navigate = useNavigate()
  const {imageUrl, title, route} = category
  const navigateHandler = () => {
    navigate(route)
  }
  return (
  <DirectoryItemContainer onClick={navigateHandler}>
    <BackgroundImage imageUrl={imageUrl}/>
    <Body>
      <h2>{title.toUpperCase()}</h2>
      <p>Shop now</p>
    </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
