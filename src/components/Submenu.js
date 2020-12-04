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
<<<<<<< HEAD
          <Link to='/wishlist' id="menu-item-link"><p id="menu-item">View Wishlist</p></Link>
=======
          <Link to='/wishlist' id="menu-item-link"><p id="menu-item">Wishlist</p></Link>
>>>>>>> 666bbdef2233d6d608a24e87e98b81aa74a70783
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