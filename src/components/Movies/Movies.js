import "./Movies.css"
import React from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader'
import { moviesApi } from "../../utils/MoviesApi";
import { MainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Movies(props) {

  const filterShortMovies = (moviesForFilter) => moviesForFilter.filter((item) => item.duration <= 40);
  
  return (
    <section>
      <SearchForm 
        onSubmit={props.onSubmit}
        onInput={props.onInput}
        filterMovies={props.filterMovies}
        handleFilter={props.handleFilter}
        query={props.query}
        checked={props.checked}
        setChecked={props.setChecked}
        // setCheckedShort={props.setCheckedShort}
        // checkedShort={props.checkedShort}
      />

      {props.loading ? (
        <Preloader />
      ) : (
        <MoviesCardList
        movies={props.filterMovies? props.movies : filterShortMovies(props.movies)}  
        loading={props.loading}
        setLoading={props.setLoading}
        isNotSuccessRequest={props.isNotSuccessRequest}
        onMovieLike={props.onMovieLike}
        onMovieDelete={props.onMovieDelete}
        moviesSaved={props.moviesSaved}
        isLikedAndSaved={props.isLikedAndSaved}

      />
      )}
    </section>
  );
}

export default Movies;