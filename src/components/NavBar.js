import React from 'react';
import './NavBar.css';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Link} from 'react-router-dom';
import Modal from './Modal'
import Submenu from './Submenu' 
import { UserContext } from './Context/Contexts';
import SearchDropDown from './SearchDropDown';

function NavBar(props) {
    const modalRef=React.useRef();

    const openModal= () =>{
        modalRef.current.openModal();
    }

    const {user, userSession, books} = React.useContext(UserContext)
    const [suggessions, setSugessions] = React.useState([])
    const [searchTerm, setSearchTerm] = React.useState("")

    const handleSearch = () =>{
        console.log("Search click " + searchTerm)
        //props.setSearchFlag(true)
        props.setSearchTerm(searchTerm)
    }

    const search = (term) =>{
        console.log(term)
        let suggessionsTemp = []
        if(term.length >= 3){
            console.log("search")
            for(let i in books){
                if(books[i].author.toLowerCase().includes(term.toLowerCase())){
                    if(!suggessionsTemp.includes(books[i].author)){
                        suggessionsTemp.push(books[i].author)
                    }
                    
                }
                if(books[i].category.toLowerCase().includes(term.toLowerCase())){
                    //console.log(books[i].category)
                    if(!suggessionsTemp.includes(books[i].category)){
                        suggessionsTemp.push(books[i].category)
                    }
                }
                if(books[i].title.toLowerCase().includes(term.toLowerCase())){
                    //console.log(books[i].title)
                    if(!suggessionsTemp.includes(books[i].title)){
                        suggessionsTemp.push(books[i].title)
                    }
                }
                /*if(books[i].desc.toLowerCase().includes(term.toLowerCase())){
                    //console.log(books[i].desc)
                    suggessionsTemp.push(books[i].desc)
                }*/
            }
            setSugessions(suggessionsTemp)
            console.log(suggessionsTemp)

        }

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
                        setSugessions([])
                        setSearchTerm(event.target.value)
                        search(event.target.value)
                    }} 

                    onKeyPress={event => {
                        if(event.key === 'Enter'){
                            handleSearch()
                        }
                    }}/>
                <SearchIcon  className="searchIcon" onClick={handleSearch}/> 
                <SearchDropDown suggessions={suggessions}/>
            </div>

            <div className="headerLinks">

                <Link to='/' id="homeLink"><p id="linkToHome">Home</p></Link>
                <Link to ='/blog' id="blogLink"><p id="linkToBlog">Blog</p></Link>
                <Link to='/about' id="aboutLink"><p id="linkToAbout">About</p></Link>
            </div>
            
            {user || userSession?(
                <div className="userAndPost">
                    <div className="drop-down">
                        <div className="headerUser">
                            <AccountCircleRoundedIcon className="userIcon"/>
                           {/* <div className="userName">
                                <span>Welcome</span>
                                {user ? (
                                    <span>{JSON.parse(user).fname}</span>
                                ):(      
                                    <span>{JSON.parse(userSession).fname}</span>
                                )}
                                </div>*/}
                        
                            
                        </div>
                        <Submenu/>
                        
                    </div>
                </div>
            ):(
                <div className="headerLinks" onClick={openModal}>
                    <p>Login</p>                
                </div>
            )}
            
            <Modal ref={modalRef}/>
            <Link to='/postad' id="postLink"><p id="linkToSell">POST AD</p></Link>
        </nav>
    )
}

export default NavBar