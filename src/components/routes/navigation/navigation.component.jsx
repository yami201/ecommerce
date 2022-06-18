import { Fragment , useContext} from "react"
import {Outlet, Link} from "react-router-dom"
import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"
import {ReactComponent as Crown} from "../../../assets/crown.svg"
import { UserContext } from "../../../contexts/user.context"
import { CartContext } from "../../../contexts/cart.context"
import { signOutUser } from "../../../utils/firebase/firebase.utils"
import {NavigationContainer , LogoContainer , NavLinks , NavLink} from "./navigation.style"
const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const {isCartOpen } = useContext(CartContext)
    return (
      <Fragment>
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
      </Fragment>
      
    )
}
export default Navigation