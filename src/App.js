import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage'
import PostPage from './components/pages/PostPage'
import BlogPage from './components/pages/BlogPage'
import WishListPage from './components/pages/WishlistPage'
import AboutPage from './components/pages/AboutPage'
import UserAd from './components/pages/UserAdDetails'
import ReadBlog from './components/pages/ReadBlog'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import SearchPage from './components/pages/SearchPage';
import { SearchContext, UserContext } from './components/Context/Contexts';
import UserAccount from './components/pages/UserAccount';
import Messages from './components/pages/Messages';
import IndividualItem from './components/pages/IndividualItem';
import {API} from './components/API/Api'
import UserOffers from './components/pages/UserOffers';
import SingleBlog from './components/SingleBlog';
import UserBlogs from './components/pages/UserBlogs';

function App() {
  const [searchTerm, setSearchTerm] = React.useState(null)
  const [user, setUser] = React.useState(null)
  const [userSession, setUserSession] = React.useState(localStorage.getItem('user'))
  const [wishList, setWishList] = React.useState((localStorage.getItem('wishlist')))
  const [likedBlogs, setLikedBlogs] = React.useState((localStorage.getItem('likedBlogs')))

  const [books, setBooks] = React.useState([])
  
    
  React.useEffect(() =>{
      function getItems(){
          console.log('getBoooksss')
          API.get('api/get_user_books')
          .then(data=>{
              setBooks(data.data)
              console.log(data.data)
          })
          .catch(err=>{
              console.log(err)
          })
      }
      getItems()
  }, [])

  return (
    <div className="App">
    <Router>
    <UserContext.Provider value={{user, setUser, userSession, setUserSession, wishList, setWishList, books, likedBlogs, setLikedBlogs}}>
      <NavBar setSearchTerm={setSearchTerm}/>
      {searchTerm?(
        <Redirect to={'/search/' + searchTerm}/>
      ):(null)}
      <Switch>
        <SearchContext.Provider value={{searchTerm}}>
          <Route path='/' exact component={HomePage}/>
          <Route path='/search/:term' component={SearchPage}/>
        
          <Route path='/postad' exact component={PostPage}/>
          <Route path='/user_account' exact component={UserAccount}/>          
          <Route path='/blog' exact component={BlogPage}/>
          <Route path='/wishlist' exact component={WishListPage}/>
          <Route path='/about' exact component={AboutPage}/>
          <Route path='/userAd' exact component={UserAd}/>
          <Route path='/readBlog' exact component={ReadBlog}/>
          <Route path='/userOffers' exact component={UserOffers}/>
          <Route path='/userBlogs' exact component={UserBlogs}/>
          <Route path='/messages/:id' exact component={Messages}/>
          <Route path='/currentItem/:id' exact component={IndividualItem}/>
          <Route path='/currentBlog/:id' exact component={SingleBlog}/>

          
        </SearchContext.Provider>
        

      </Switch>
      </UserContext.Provider>
    </Router>
    </div>
  );
}

export default App;
