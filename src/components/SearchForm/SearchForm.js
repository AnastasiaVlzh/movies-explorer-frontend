import { useState } from "react";
import './SearchForm.css';
import Button from "../button/button";
import Input from "../input/input";
import Checkbox from "../checkbox/checkbox";
import React from 'react';
import { useLocalStorage } from '../localStorage/useLocalStorage'

function SearchForm ({onSubmit,onInput,filterMovies,movies,handleFilterMovies,isSavedMoviesList,handleFilterShortMovies,filterShortMovies,query}) {

  //const [query, setQuery] = useLocalStorage("query", "");
  const [queryShort, setQueryShort] = React.useState('');

// страница с фильмами

  // function onInputHandler(value){
  //   setQuery(value);
  // }

  // function handleInput(event){
  //   onInput(event.target.value)
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   onSubmit(query);
  // }

// страница с сохраненными фильмами

function onInputHandlerShort(value){
  setQueryShort(value);
}

function handleInputShort(event){
  onInputHandlerShort(event.target.value)
}

// function handleSubmit(e) {
//   e.preventDefault();
//   onSubmit(query);
// }


  return (
      <section className="search">
        <form onSubmit={onSubmit} className="search__form">
            <Input 
            placeholder= "Фильм"
            onInputHandler={onInput}
            onInput={!isSavedMoviesList? onInput : handleInputShort }
            setInput={!isSavedMoviesList? query : queryShort}
            isSavedMoviesList={isSavedMoviesList}
            />
            <Button/>
        </form>
        <Checkbox
        filterMovies={filterMovies}
        filterShortMovies={filterShortMovies}
        movies={movies}
        handleFilterMovies={handleFilterMovies}
        isSavedMoviesList={isSavedMoviesList}
        handleFilterShortMovies={handleFilterShortMovies}
        />

      </section>

  );
};

export default SearchForm;