import { Fragment , useContext} from "react"
import {Outlet, Link} from "react-router-dom"

import { onAuthStateChangedListener } from "../../../utils/firebase/firebase.utils"
import {ReactComponent as Crown} from "../../../assets/crown.svg"
import { UserContext } from "../../../contexts/user.context"
import { signOutUser } from "../../../utils/firebase/firebase.utils"
import "./navigation.style.scss"
const Navigation = () => {
  const {currentUser} = useContext(UserContext)

    return (
      <Fragment>
        <nav className="navigation">
            <Link className="logo-container" to='/'>
                <Crown/>
            </Link>
            
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">Shop</Link>
                {
                  currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                  ) : (
                    <Link className="nav-link" to="/auth">Sign In</Link>
                  )
                }
                
            </div>
        </nav>
        <Outlet/>
      </Fragment>
      
    )
}
export default Navigation