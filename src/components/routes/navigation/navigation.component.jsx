import {Outlet} from "react-router-dom"
import { useSelector , useDispatch} from "react-redux"
import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"
import {ReactComponent as Crown} from "../../../assets/crown.svg"
import { selectIsCartOpen } from "../../../store/cart/cart.selector"
import { selectCurrentUser } from "../../../store/user/user.selector"
import {NavigationContainer , LogoContainer , NavLinks , NavLink} from "./navigation.style"
import { signOutAction } from "../../../store/user/user.action"
import { useCallback } from "react"
const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen  = useSelector(selectIsCartOpen)
  const signOutHandler = useCallback(() => dispatch(signOutAction()),[])
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
                    <NavLink as="span" onClick={signOutHandler}>Sign Out</NavLink>
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