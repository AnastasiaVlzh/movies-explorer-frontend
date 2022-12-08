import "../Movies/Movies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import React from 'react';
import { MainApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader'


function SavedMovies(props) {

  const filterShortMovies = (moviesForFilter) => moviesForFilter.filter((item) => item.duration <= 40);
  const savedMoviesArray = props.moviesSaved.filter(item =>item.nameRU.toLowerCase().includes(props.query.toLowerCase()))


  React.useEffect(() => {
    MainApi.getSavedMovies()
        .then((data) => {
            props.setSavedMoviesList(data);
            if(props.query.length > 0 && savedMoviesArray.length === 0 ){
              props.setSavedMoviesList(savedMoviesArray)
              props.setIsNotFound(true)
            } else if(props.query.length > 0 && savedMoviesArray.length > 0 )
              props.setSavedMoviesList(savedMoviesArray)
        })
        .catch(err => {
          console.log(err);
        })
}, [props.moviesSaved]);


  
  return (
    <section>
      <SearchForm 
        onSubmit={props.onSubmit}
        onInput={props.onInput}
        filterShortMovies={props.filterShortMovies}
        handleFilter={props.handleFilter}
        isSavedMoviesList={props.isSavedMoviesList}
        checked={props.checked}
        setChecked={props.setChecked}
        query={props.query}
      />
      {props.loading ? (
        <Preloader />
      ) : (
      <MoviesCardList 
        //movies={props.filterShortMovies? props.savedMoviesList : filterShortMovies(props.savedMoviesList)}
        movies={props.filterShortMovies? props.movies : filterShortMovies(props.movies)}
        savedMoviesList={props.savedMoviesList}
        //movies={props.movies}
        setSavedMoviesList={props.setSavedMoviesList}
        isSavedMoviesList={props.isSavedMoviesList}
        onMovieDelete={props.onMovieDelete}
        isNotFound={props.isNotFound}
      />
      )}
    </section>
  );
}

export default SavedMovies;