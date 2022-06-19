import {Outlet} from "react-router-dom"
import { useSelector } from "react-redux"
import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"
import {ReactComponent as Crown} from "../../../assets/crown.svg"
import { selectIsCartOpen } from "../../../store/cart/cart.selector"
import { signOutUser } from "../../../utils/firebase/firebase.utils"
import { selectCurrentUser } from "../../../store/user/user.selector"
import {NavigationContainer , LogoContainer , NavLinks , NavLink} from "./navigation.style"
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
 
  const isCartOpen  = useSelector(selectIsCartOpen)
    return (
      <>
        <NavigationContainer>
            <LogoContainer to='/'>
                <Crown/>
            </LogoContainer>
            
            <NavLinks>
                <NavLink to="/shop">Shop</NavLink>
                {
                  currentUser ? (
                    <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
                  ) : (
                    <NavLink to="/auth">Sign In</NavLink>
                  )
                }
                <CartIcon />
            </NavLinks>
            { isCartOpen && <CartDropdown/> }
        </NavigationContainer>
        <Outlet/>
      </>
      
    )
}
export default Navigation