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

    const {userSession, books} = React.useContext(UserContext)
    const [suggessions, setSugessions] = React.useState([])
    const [searchTerm, setSearchTerm] = React.useState("")
    const [searchTermTemp, setSearchTermTemp] = React.useState("")
    const [activeIndex, setActiveIndex]= React.useState(-1)

    const handleSearch = () =>{
        console.log("Search click " + searchTerm)
        //props.setSearchFlag(true)
        props.setSearchTerm(searchTerm)
        setSugessions([])
    }

    const search = (term) =>{
        console.log(term)
        console.log(activeIndex)
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
            }
            setSugessions(suggessionsTemp)
            console.log(suggessionsTemp)
    
        }
    }

    const onDownKey = (e) =>{
        //console.log("key   " + e.keyCode)
        if(e.keyCode == 40 && activeIndex < suggessions.length-1){
            console.log('down key pressed adn index  ' + activeIndex)
            setActiveIndex(activeIndex+1)
            setSearchTerm(suggessions[activeIndex+1])
                
        }
        if(e.keyCode == 38 && activeIndex >= 0){
            setActiveIndex(activeIndex-1)
            setSearchTerm(suggessions[activeIndex-1])
                
        }
        if(e.keyCode == 38 && activeIndex == -1){
            setSearchTerm(searchTerm)
                
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
                        setActiveIndex(-1)
                        setSearchTerm(event.target.value)
                        search(event.target.value)
                    }} 

                    onKeyPress={event => {
                        if(event.key === 'Enter'){
                            handleSearch()
                        }
                    }}
                    onKeyDown={onDownKey}
                    value={searchTerm}/>
                <SearchIcon  className="searchIcon" onClick={handleSearch}/>
                <SearchDropDown suggessions={suggessions} setSearchTerm={setSearchTerm}
                    activeIndex={activeIndex}
                    setSugessions={setSugessions}
                /> 
               
            </div>

            <div className="headerLinks">

                <Link to='/' id="homeLink"><p id="linkToHome">Home</p></Link>
                <Link to ='/blog' id="blogLink"><p id="linkToBlog">Blog</p></Link>
                <Link to='/about' id="aboutLink"><p id="linkToAbout">About</p></Link>
            </div>
            
            {userSession?(
                <div className="userAndPost">
                    <div className="drop-down">
                        <div className="headerUser">
                            <AccountCircleRoundedIcon className="userIcon"/>
                            
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
            <Link to='/postad' id="postLink"><p id="linkToSell" onClick={()=>{
                if(!userSession){
                    alert('Please Login')
                }
            }}>POST AD</p></Link>
        </nav>
    )
}

export default NavBar