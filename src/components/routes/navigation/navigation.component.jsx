import { Fragment } from "react"
import {Outlet, Link} from "react-router-dom"
import {ReactComponent as Crown} from "../../../assets/crown.svg"
import "./navigation.style.scss"
const Navigation = () => {
    return (
      <Fragment>
        <nav className="navigation">
            <Link className="logo-container" to='/'>
                <Crown/>
            </Link>
            
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">Shop</Link>
                <Link className="nav-link" to="/auth">Sign In</Link>
            </div>
        </nav>
        <Outlet/>
      </Fragment>
      
    )
}
export default Navigation