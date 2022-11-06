import Header from '../header/header';
import './App.css';
import React from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Main from '../Main/Main'
import { Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import * as auth from '../../utils/auth'

function App() {
  const [currentUser, setСurrentUser] = React.useState(null);
  const history = useHistory();

  const onRegister = (data) => {
    return auth
      .register(data)
      .then(() => {
        history.push('/signin');
        //setAuthMessage(true);
      })
      .catch(()=>{
        //setAuthMessage(false);
      })
  };

  return (
    <div className="app">
    <CurrentUserContext.Provider value={currentUser}>
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
        <Register
          onRegister={onRegister}
        />
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
    </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
