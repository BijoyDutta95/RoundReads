import React from 'react'
import './NavBar.css'
import SearchIcon from "@material-ui/icons/Search"
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function NavBar() {
    return (
        <nav className="navHeader">
            <div className="headerLogo">
                <img className="logo" src="/images/book2128.png"/>
                <p className="text">BM</p>
            </div>
            <div className="headerSearch">
                <input className="searchBar"/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="headerLinks">
                <p id="linkToHome">Home</p>
                <p id="linkToBlog">Blog</p>
                <p id="linkToAbout">About</p>
            </div>
            <div className="headerUser">
                <AccountCircleRoundedIcon className="userIcon"/>
                <div className="userName">
                    <span>Welcome</span>
                    <span>Guest</span>
                </div>
                
            </div>
            
            <p id="linkToSell">POST AD</p>
        </nav>
    )
}

export default NavBar
