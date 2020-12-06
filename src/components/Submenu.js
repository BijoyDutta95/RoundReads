import React from 'react'
import './Submenu.css'
import {Link} from 'react-router-dom'
import { UserContext } from './Context/Contexts'

function Submenu(props) {

  const {setUser, setUserSession, setWishList} = React.useContext(UserContext)

  const logout = () =>{
        console.log("logout")
        setUser(null)
        sessionStorage.clear()
        setUserSession(null)
        setWishList(null)
        
    }

  
    return (
      <ul className="dropdown-submenu">
        <li className="dropdown-submenu-item ">
          <Link to='/user_account' id="menu-item-link"><p id="menu-item">View Profile</p></Link>
        </li>
        <li className="dropdown-submenu-item ">
          <Link to='/wishlist' id="menu-item-link"><p id="menu-item">Wishlist</p></Link>
        </li>
        <li className="dropdown-submenu-item ">
          <Link to='/postad' id="menu-item-link"><p id="menu-item">Post an Ad</p></Link>
        </li>
        <li className="dropdown-submenu-item ">
          <Link to='#' id="menu-item-link"><p id="menu-item">Something Nothing</p></Link>
        </li>
        <li className="dropdown-submenu-item ">
          <p id="menu-item" onClick={logout}>Logout</p>
        </li>

      </ul>
    )
  }
  

export default Submenu