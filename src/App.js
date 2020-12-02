import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage'
import PostPage from './components/pages/PostPage'
import BlogPage from './components/pages/BlogPage'
import WishlistPage from './components/pages/WishlistPage'
import AboutPage from './components/pages/AboutPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import SearchPage from './components/pages/SearchPage';
import { SearchContext, UserContext } from './components/Context/Contexts';

function App() {
  const [searchTerm, setSearchTerm] = React.useState(null)
  const [user, setUser] = React.useState(null)

  return (
    <div className="App">
    <Router>
    <UserContext.Provider value={{user, setUser}}>
      <NavBar setSearchTerm={setSearchTerm}/>
      {searchTerm?(
        <Redirect to={'/search/' + searchTerm}/>
      ):(null)}
      <Switch>
        <SearchContext.Provider value={{searchTerm}}>
          <Route path='/' exact component={HomePage}/>
          <Route path='/search/:term' component={SearchPage}/>
        
          <Route path='/postad' exact component={PostPage}/>
          <Route path='/blog' exact component={BlogPage}/>
          <Route path='/wishlist' exact component={WishlistPage}/>
          <Route path='/about' exact component={AboutPage}/>
        </SearchContext.Provider>
        

      </Switch>
      </UserContext.Provider>
    </Router>
    </div>
  );
}

export default App;
