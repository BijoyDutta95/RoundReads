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
import { SearchContext } from './components/Context/DataContext';

function App() {
  const [searchTerm, setSearchTerm] = React.useState(null)
  
  return (
    <div className="App">
    <Router>
      <NavBar setSearchTerm={setSearchTerm}/>
      {searchTerm?(
        <Redirect to={'/search/' + searchTerm}/>
      ):(null)}
      <Switch>
        <SearchContext.Provider value={{searchTerm}}>
          <Route path='/' exact component={HomePage}/>
          <Route path='/search/:term' component={SearchPage}/>
        </SearchContext.Provider>
        <Route path='/postad' exact component={PostPage}/>
        <Route path='/blog' exact component={BlogPage}/>
        <Route path='/wishlist' exact component={WishlistPage}/>
        <Route path='/about' exact component={AboutPage}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
