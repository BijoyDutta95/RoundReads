import React from 'react';
import './NavBar.css';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Link} from 'react-router-dom';
import Modal from './Modal'
import Submenu from './Submenu' 
import { UserContext } from './Context/UserContext';

function NavBar(props) {
    const modalRef=React.useRef();

    const openModal= () =>{
        modalRef.current.openModal();
    }

    const [name, setName] = React.useState(null)

    const [searchTerm, setSearchTerm] = React.useState("")

    const handleSearch = () =>{
        console.log("Search click " + searchTerm)
        //props.setSearchFlag(true)
        props.setSearchTerm(searchTerm)
        
    }
 
    return (
        <nav className="navHeader">
            <Link to= '/' className="headerLogo">
                    <img className="logo" src="/images/logoGW.png"/>
                    { /*<p className="text">BM</p>*/}
            </Link>
            <div className="headerSearch">
                <input className="searchBar" 
                    onChange={event => {
                        setSearchTerm(event.target.value)
                    }} 

                    onKeyPress={event => {
                        if(event.key === 'Enter'){
                            handleSearch()
                        }
                    }}/>
                <SearchIcon  className="searchIcon"/> 
            </div>

            <div className="headerLinks">

                <Link to='/' id="homeLink"><p id="linkToHome">Home</p></Link>
                <Link to ='/blog' id="blogLink"><p id="linkToBlog">Blog</p></Link>
                <Link to='/about' id="aboutLink"><p id="linkToAbout">About</p></Link>
            </div>
            
            {name || sessionStorage.getItem('fname')?(
                <div className="userAndPost">
                    <div className="drop-down">
                        <div className="headerUser" title="Login/Sign-up">
                            <AccountCircleRoundedIcon className="userIcon"/>
                            <div className="userName">
                                <span>Welcome</span>
                                {name ? (
                                    <span>{name}</span>
                                ):(      
                                    <span>{sessionStorage.getItem('fname')}</span>
                                )}
                            </div>
                        
                            
                        </div>
                        <UserContext.Provider value={{setName}}>
                            <Submenu/>
                        </UserContext.Provider>
                    </div>
                 
                </div>
            ):(
                <div className="headerUser" title="Login/Sign-up" onClick={openModal}>
                    <AccountCircleRoundedIcon className="userIcon"/>
                    <div className="userName">
                        <span>Welcome</span><span>Guest</span>
                    </div>                   
                </div>
            )}
            <UserContext.Provider value={{setName}}>
                <Modal ref={modalRef}/>
            </UserContext.Provider>
            <Link to='postad' id="postLink"><p id="linkToSell">POST AD</p></Link>

            
        </nav>
    )
}

export default NavBar