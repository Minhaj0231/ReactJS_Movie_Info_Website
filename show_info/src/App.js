import logo from './logo.svg';
import './App.css';

import {Route, BrowserRouter as Router, Switch , Redirect} from 'react-router-dom';


import HomePage  from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import  FavouritePage  from './pages/FavouritePage';

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Switch>
      

      <Route path="/"  exact component = {() => <HomePage/> } />


      <Route path="/Favourites"    exact component = {() => <FavouritePage/> } />
      
      <Route path="/details/:showId/"  exact component = {() => <PostDetailPage/> }  />

      
      

      </Switch>
     
      </Router>
     
    </div>
  );
}

export default App;
