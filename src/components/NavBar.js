import React from 'react';
import './NavBar.css';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navHeader">
            <Link to= '/' className="headerLogo">
                    <img className="logo" src="/images/logoGW.png"/>
                    { /*<p className="text">BM</p>*/}
            </Link>
            <div className="headerSearch">
                <input className="searchBar"/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="headerLinks">

            <Link to='/' id="homeLink"><p id="linkToHome">Home</p></Link>
            <Link to ='/blog' id="blogLink"><p id="linkToBlog">Blog</p></Link>
            <Link to='/about' id="aboutLink"><p id="linkToAbout">About</p></Link>
            </div>
            <div className="headerUser">
                <AccountCircleRoundedIcon className="userIcon"/>
                <div className="userName">
                    <span>Welcome</span>
                    <span>Guest</span>
                </div>
                
            </div>
            
            <Link to='/postad' id="postLink"><p id="linkToSell">POST AD</p></Link>
        </nav>
    )
}

export default NavBar
