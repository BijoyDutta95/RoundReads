import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage'
import PostPage from './components/pages/PostPage'
import BlogPage from './components/pages/BlogPage'
import WishlistPage from './components/pages/WishlistPage'
import AboutPage from './components/pages/AboutPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={HomePage}/>
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
