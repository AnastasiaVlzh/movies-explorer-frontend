import Header from '../header/header';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Main from '../Main/Main'
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="app">
    <Header
    />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>      
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/profile">
          <Profile />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
    <Footer />

    
    </div>
  );
}

export default App;
