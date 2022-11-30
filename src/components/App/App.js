import Header from '../header/header';
import './App.css';
import React from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Main from '../Main/Main'
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import * as auth from '../../utils/auth'
import { MainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { useLocation } from 'react-router-dom';
import { useLocalStorage } from '../localStorage/useLocalStorage'

function App() {
  const [currentUser, setСurrentUser] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState('');
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [authMessage, setAuthMessage] = React.useState(false);

  const [movies, setMovies] = React.useState(null);
  const [query, setQuery] = useLocalStorage("query", " ");
  const [loading, setLoading] = React.useState(false);
  const [isNotSuccessRequest, setIsNotSuccessRequest] = React.useState(false);
  const [moviesSaved, setMoviesSaved] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [filterMovies, setFilterMovies] = React.useState(true);
  const [filterShortMovies, setFilterShortMovies] = React.useState(true);
  

  const history = useHistory();
  const location = useLocation();

  const isSavedMoviesList =
  location.pathname === '/saved-movies' ? true : false;
 

  const onRegister = (data) => {
    return auth
      .register(data)
      .then(() => {
        history.push('/signin');
      })
      .catch((err)=>{
        console.log(err);
      })
  };

  const onLogin = (data) => {
    return auth
      .authorize(data)
      .then((res) => {
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    MainApi
      .getUserData()
      .then((userData) => {
        setUserInfo(userData.email );
        setIsLoggedIn(true);
        setСurrentUser(userData);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err)
        localStorage.clear();
        history.push('/');
        setMovies([]);
        setMoviesSaved([]);
      }
      );
  }, [isLoggedIn,history])



  function handleUpdateUser({ name, email }){
    MainApi
    .updateUser({ name, email })
    .then((res)=>{
      setСurrentUser(res)
      setIsInfoTooltipOpen(true)
      setAuthMessage(true);
    })
    .catch(err => {
      console.log(err);
      setIsInfoTooltipOpen(true)
      setAuthMessage(false);
    })
  }

  const onLogout = () => {
    return auth
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setUserInfo('');
        console.log(userInfo)
        history.push('/signin');
      })
      .catch((err) => console.log(err));
  }

  function onInputHandler(value){
       setQuery(value);
   }

   const moviesSearch = (value) => value.filter(item =>item.nameRU.toLowerCase().includes(query.toLowerCase()))

  function onSubmitHandler(event){
    event.preventDefault();
    setLoading(true)
    moviesApi.getMovies(query)
    .then ((res) => {
      setMovies(moviesSearch(res));
      localStorage.setItem('movies', JSON.stringify(moviesSearch(res)));
    })
    .catch((err) =>{
      console.log(err)
      setLoading(false);
      setIsNotSuccessRequest(true);
    })
    .finally(() => setLoading(false));
  }


  React.useEffect(() => {
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));

        if (localStorageMovies) {
            setMovies(localStorageMovies);
          }
 
    }, []);



  function handleMoveLike(data) {       
    MainApi.likedAndSavedMovie(data)
    .then((res) => {
      setMoviesSaved([res, ...moviesSaved]);
      console.log(res.movieId)
    })
    .catch(err => {
      console.log(err);
    })
  }


  function handleMovieDelete(data) {
    const card = !!data._id ? data : moviesSaved.find((movie) => data.id === movie.movieId);
    MainApi.deleteSavedMovie(card._id)
    .then(() => {
      setMoviesSaved(moviesSaved.filter(c => c._id !== card._id));
    })
    .catch(err => {
      console.log(err);
    })
  }
  


  function getSavedMovies(){
    MainApi.getSavedMovies()
    .then((res) =>{
      setMoviesSaved(res.filter((movies) => movies.owner === currentUser._id))
    })
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      history.push("/movies");
      console.log(isLoggedIn)
      getSavedMovies()
    }
    
  }, [isLoggedIn,history]);


      React.useEffect(() => {
        if (!isSavedMoviesList) {
          setSavedMoviesList(moviesSaved);
        }
      }, [savedMoviesList, moviesSaved]);

    function onSubmitSavedMoviesHandler(event){
        event.preventDefault();
        setLoading(true)
        MainApi.getSavedMovies()
        .then ((res) => {
          setSavedMoviesList(moviesSearch(res));
        })
        .catch((err) =>{
          console.log(err)
          setLoading(false);
          setIsNotSuccessRequest(true);
        })
        .finally(() => setLoading(false));
      }

      function handleFilterMovies() {
        setFilterMovies(!filterMovies);
        localStorage.setItem('checkbox', !filterMovies);
    }

    function handleFilterShortMovies() {
      setFilterShortMovies(!filterShortMovies);
      
  }

    React.useEffect(() => {
      const checkbox = localStorage.getItem('checkbox');
      setFilterMovies(JSON.parse(checkbox));
    }, []);


      function closePopups(){
        setIsInfoTooltipOpen(false);
      }


  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
    <Header
      isLoggedIn={isLoggedIn}
    />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>    
      <ProtectedRoute
      component ={ Movies}
      path ="/movies"
      isLoggedIn={isLoggedIn}
      currentUser = {setСurrentUser}
      movies={movies}  
      loading={loading}
      setLoading={setLoading}
      onSubmit={onSubmitHandler}
      isNotSuccessRequest={isNotSuccessRequest}
      onMovieLike={handleMoveLike}
      onMovieDelete={handleMovieDelete}
      moviesSaved={moviesSaved}
      filterMovies={filterMovies}
      handleFilterMovies={handleFilterMovies}
      onInput={onInputHandler}
      setInput={query}
      />
      <ProtectedRoute
        component={SavedMovies} 
        path="/saved-movies"
        isLoggedIn={isLoggedIn}
        savedMoviesList={savedMoviesList}
        setSavedMoviesList={setSavedMoviesList}
        isSavedMoviesList={isSavedMoviesList}
        loading={loading}
        setLoading={setLoading}
        onMovieDelete={handleMovieDelete}
        onSubmit={onSubmitSavedMoviesHandler}
        moviesSaved={moviesSaved}
        filterShortMovies={filterShortMovies}
        handleFilterShortMovies={handleFilterShortMovies}
        
      /> 
      <ProtectedRoute
        component={Profile} 
        path="/profile"
        isLoggedIn={isLoggedIn}
        onSubmit={handleUpdateUser}
        onLogout={onLogout} 
      /> 
      <Route path="/signup">
        <Register
          onRegister={onRegister}
        />
      </Route>
      <Route path="/signin">
        <Login 
          onLogin={onLogin}
        />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
      <Route>
      {isLoggedIn ? <Redirect to="/movies" /> : <Redirect to="/signup" />}
      </Route>
    </Switch>
    <Footer />
    <InfoTooltip
      isOpen={isInfoTooltipOpen}
      onClose={closePopups}
      auth={authMessage} 
    />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
