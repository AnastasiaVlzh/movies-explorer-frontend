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

function App() {
  const [currentUser, setСurrentUser] = React.useState(null);
  const [currentName, setCurrentName] = React.useState(null);
  const [currentEmail, setCurrentEmail] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState('');
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [authMessage, setAuthMessage] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isNotSuccessRequest, setIsNotSuccessRequest] = React.useState(false);
  const [moviesSaved, setMoviesSaved] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [filterMovies, setFilterMovies] = React.useState(false);
  const [filterShortMovies, setFilterShortMovies] = React.useState(true);

  // const checkboxStatus = () => {
  //   const userCheckboxStatus = localStorage.getItem('checkbox');
  //   return userCheckboxStatus ? userCheckboxStatus : true;
  // };

  const [checked, setChecked] = React.useState(true);

  const [checkedShort, setCheckedShort] = React.useState(true);
  const [queryShort, setQueryShort] = React.useState('');
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isSavedMoviesNoFound, setIsSavedMoviesNoFound] = React.useState(false);
  
  

  const history = useHistory();
  const location = useLocation();

  const isSavedMoviesList =
  location.pathname === '/saved-movies' ? true : false;
 

  const onRegister = (data) => {
    return auth
      .register(data)
      .then(() => {
        onLogin({
          email: data.email,
          password: data.password,
        });
        history.push('/movies');
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
        setChecked(true);
        console.log("checkbox")
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
        setCurrentName(userData.name)
        setCurrentEmail(userData.email)
        history.push("/movies");
        //setChecked(true)
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
      setCurrentName(res.name)
      setCurrentEmail(res.email)
      setIsInfoTooltipOpen(true)
      setAuthMessage(true);
      console.log(currentName)
      console.log(currentEmail)
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
        localStorage.clear();
        setFilterMovies(true);
        setChecked(false);
        setQuery('')
        setIsNotFound(false)
        console.log("checkbox")
      })
      .catch((err) => console.log(err));
  }

  function onInputHandler(event){
       setQuery(event.target.value);
   }
  
   function onInputHandlerShort(event){
    setQueryShort(event.target.value);
  }

  function handleMoviesSearch() {
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
    if (localStorageMovies === null) {
    moviesApi
    .getMovies()
    .then((res) => {
      setLoading(true)
      localStorage.setItem('movies', JSON.stringify(res));;
      setMovies(res.filter(item =>item.nameRU.toLowerCase().includes(query.toLowerCase())))
      moviesFilter(query)
      localStorage.setItem('query',query);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => setLoading(false));
  } else {
    localStorage.setItem('query',query);
    moviesFilter(query)
  } 
}


const moviesFilter =  React.useCallback((query) => {
  const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
  const localStorageInput = localStorage.getItem('query');
  //const checkbox = localStorage.getItem('checkbox',true);

      if (localStorageMovies) {

        const filterByQuery = (item) => {
          return JSON.stringify(item.nameRU)
            .toLowerCase().includes(query.toLowerCase());
        };

        const moviesArray = localStorageMovies.filter(filterByQuery);

        setMovies(moviesArray);
        localStorage.setItem('filterdcards', JSON.stringify(moviesArray));
        localStorage.setItem('query', query);

        if (moviesArray.length === 0){
        setIsNotFound(true)
        }else{
        setIsNotFound(false)
        }

        const filterByTime = (i) => {
          return i.duration <= 40;
        };
  
        if (!checked) {
          const filterShort = moviesArray.filter(filterByTime);
          setMovies(filterShort);
          if (filterShort.length === 0) {
            setIsNotFound(true)
          } else {
            setIsNotFound(false)
            console.log("checkbox")
          };
        }
        }

      if (localStorageInput) {
        setQuery(localStorageInput);
      }


  }, [checked]);


    React.useEffect(() => {
      const checkbox = localStorage.getItem('checkbox');
      setChecked(JSON.parse(checkbox));

      if(checkbox === null){
        setChecked(true)
      }

      console.log("checkbox")
    }, []);




    React.useEffect(() => {
      const localStorageInput = localStorage.getItem('query');;
      moviesFilter(localStorageInput);
    }, [moviesFilter,checked]);



  function handleMoveLike(data) {       
    MainApi.likedAndSavedMovie(data)
    .then((res) => {
      setMoviesSaved([res, ...moviesSaved]);
      console.log(res.movieId)
    })
    .catch((err) => {
      if (err === 'Ошибка: 401') {
        setIsLoggedIn(false);
        setMovies([]);
        setMoviesSaved([]);
        history.push('/');
        localStorage.clear();
      } else {
        console.log(err);
      }
  })
}

  function handleMovieDelete(data) {
    const card = !!data._id ? data : moviesSaved.find((movie) => data.id === movie.movieId);
    MainApi.deleteSavedMovie(card._id)
    .then(() => {
      setMoviesSaved(moviesSaved.filter(c => c._id !== card._id))
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  // function getSavedMovies(){
  //   MainApi.getSavedMovies()
  //   .then((res) =>{
  //     setMoviesSaved(res.filter((movies) => movies.owner === currentUser._id))
  //   })
  // }

  React.useEffect(() => {
    if (isLoggedIn) {
      MainApi.getSavedMovies()
      .then((data) =>{
      history.push("/movies");
      setMoviesSaved(data);
      })
    }
    
  }, [isLoggedIn,history]);


      React.useEffect(() => {
        if (!isSavedMoviesList) {
          setSavedMoviesList(moviesSaved);
          setIsSavedMoviesNoFound(false)
          setQueryShort('')
        }
      }, [savedMoviesList, moviesSaved,isSavedMoviesList]);



    
      function onSubmitSavedMoviesHandler() {
  
        const savedMoviesArray = moviesSaved.filter(item =>item.nameRU.toLowerCase().includes(queryShort.toLowerCase()))
        setSavedMoviesList(savedMoviesArray);
    
        if (savedMoviesArray.length === 0) {
          setIsSavedMoviesNoFound(true)
        } else {
          setIsSavedMoviesNoFound(false)
        };

      }

      function handleFilterMovies() {
        setFilterMovies(!filterMovies);
        localStorage.setItem('checkbox', !checked);
      }

      function handleSwitchCheckbox() {
        setChecked(!checked);
        handleFilterMovies(checked);
      }

      function handleFilterShortMovies() {
        setFilterShortMovies(!filterShortMovies);

      }

    function handleSwitchCheckboxShortMovies() {
      setCheckedShort(!checkedShort);
      handleFilterShortMovies(!checkedShort);
      
      const filterShortMovies = (item) => {
        return item.duration <= 40;
      };

      const savedMoviesArray = moviesSaved.filter(item =>item.nameRU.toLowerCase().includes(queryShort.toLowerCase()))

      if (checkedShort) {
        if (savedMoviesArray.filter(filterShortMovies).length === 0 || null) {
          setIsSavedMoviesNoFound(true)
        }
      } 

      else  {
        setSavedMoviesList(savedMoviesArray);
        setIsSavedMoviesNoFound(false)
      }

    }


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
      onSubmit={handleMoviesSearch}
      isNotSuccessRequest={isNotSuccessRequest}
      onMovieLike={handleMoveLike}
      onMovieDelete={handleMovieDelete}
      moviesSaved={moviesSaved}
      filterMovies={filterMovies}
      handleFilter={handleSwitchCheckbox}
      onInput={onInputHandler}
      query={query}
      checked={checked}
      setChecked={setChecked}
      isNotFound={isNotFound}
      />
      <ProtectedRoute
        component={SavedMovies} 
        path="/saved-movies"
        isLoggedIn={isLoggedIn}
        movies={savedMoviesList}
        setSavedMoviesList={setSavedMoviesList}
        isSavedMoviesList={isSavedMoviesList}
        loading={loading}
        setLoading={setLoading}
        onMovieDelete={handleMovieDelete}
        onSubmit={onSubmitSavedMoviesHandler}
        moviesSaved={moviesSaved}
        filterShortMovies={filterShortMovies}
        handleFilter={handleSwitchCheckboxShortMovies}
        checked={checkedShort}
        setChecked={setCheckedShort}
        query={queryShort}
        onInput={onInputHandlerShort}
        isNotFound={isSavedMoviesNoFound}
        setIsNotFound={setIsSavedMoviesNoFound}
      /> 
      <ProtectedRoute
        component={Profile} 
        path="/profile"
        isLoggedIn={isLoggedIn}
        onCorrect={handleUpdateUser}
        onLogout={onLogout}
        currentEmail={currentEmail}
        currentName={currentName}
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
