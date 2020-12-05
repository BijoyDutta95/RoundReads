import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage'
import PostPage from './components/pages/PostPage'
import BlogPage from './components/pages/BlogPage'
import WishListPage from './components/pages/WishlistPage'
import AboutPage from './components/pages/AboutPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import SearchPage from './components/pages/SearchPage';
import { SearchContext, UserContext } from './components/Context/Contexts';
import UserAccount from './components/pages/UserAccount';

function App() {
  const [searchTerm, setSearchTerm] = React.useState(null)
  const [user, setUser] = React.useState(null)
  const [userSession, setUserSession] = React.useState(sessionStorage.getItem('user'))
  const [wishList, setWishList] = React.useState(sessionStorage.getItem('wishlist'))

  return (
    <div className="App">
    <Router>
    <UserContext.Provider value={{user, setUser, userSession, setUserSession, wishList, setWishList}}>
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
        </SearchContext.Provider>
        

      </Switch>
      </UserContext.Provider>
    </Router>
    </div>
  );
}

export default App;
