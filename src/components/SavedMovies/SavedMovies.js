import "../Movies/Movies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import React from 'react';
import { MainApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader'


function SavedMovies(props) {

  const filterShortMovies = (moviesForFilter) => moviesForFilter.filter((item) => item.duration <= 40);

  React.useEffect(() => {
    MainApi.getSavedMovies()
        .then((data) => {
            props.setSavedMoviesList(data);
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
        handleFilterShortMovies={props.handleFilterShortMovies}
        isSavedMoviesList={props.isSavedMoviesList}
      />
      {props.loading ? (
        <Preloader />
      ) : (
      <MoviesCardList 
        movies={props.filterShortMovies? props.savedMoviesList : filterShortMovies(props.savedMoviesList)}
        savedMoviesList={props.savedMoviesList}
        setSavedMoviesList={props.setSavedMoviesList}
        isSavedMoviesList={props.isSavedMoviesList}
        onMovieDelete={props.onMovieDelete}
      />
      )}
    </section>
  );
}

export default SavedMovies;