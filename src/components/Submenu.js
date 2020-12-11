import React from 'react'
import './Submenu.css'
import {Link} from 'react-router-dom'
import { UserContext } from './Context/Contexts'
import UserIcon from '../icons/user.svg';


function Submenu() {

  const {setUser, setUserSession, setWishList, userSession} = React.useContext(UserContext)

  const logout = () =>{
        console.log("logout")
        setUser(null)
        sessionStorage.clear()
        setUserSession(null)
        setWishList(null)
        
    }

  
    return (
      <>
        <ul className="dropdown-submenu">
          <li className="dropdown-submenu-item">
            <div id="userInfo">
              <img src={UserIcon} alt="userIcon" id="usrIcon"/>
              <strong>Hello {JSON.parse(userSession).fname}</strong>
            </div>

          </li>
          <li className="dropdown-submenu-item">
            <Link to='/user_account' id="menu-item-link"><p id="menu-item">View Profile</p></Link>
          </li>
          <li className="dropdown-submenu-item ">
            <Link to='/wishlist' id="menu-item-link"><p id="menu-item">Wishlist</p></Link>
          </li>
          <li className="dropdown-submenu-item ">
            <Link to='/userAd' id="menu-item-link"><p id="menu-item">My Ads</p></Link>
          </li>
          <li className="dropdown-submenu-item ">
            <Link to='#' id="menu-item-link"><p id="menu-item">My Blogs</p></Link>
          </li>
          <li className="dropdown-submenu-item ">
            <p id="menu-item" onClick={logout}>Logout</p>
          </li>

        </ul>
      </>
    )
    
  }
  

export default Submenu