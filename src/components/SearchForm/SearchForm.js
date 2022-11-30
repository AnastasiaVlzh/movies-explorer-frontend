import { useState } from "react";
import './SearchForm.css';
import Button from "../button/button";
import Input from "../input/input";
import Checkbox from "../checkbox/checkbox";
import React from 'react';

function SearchForm ({onSubmit,onInput,filterMovies,movies,handleFilterMovies,setInput,isSavedMoviesList,handleFilterShortMovies}) {

  function handleInput(event){
    onInput(event.target.value)
  }


  return (
      <section className="search">
        <form onSubmit={onSubmit} className="search__form">
            <Input 
            placeholder= "Фильм"
            onInputHandler={onInput}
            onInput={handleInput}
            setInput={setInput}
            />
            <Button/>
        </form>
        <Checkbox
        filterMovies={filterMovies}
        movies={movies}
        handleFilterMovies={handleFilterMovies}
        isSavedMoviesList={isSavedMoviesList}
        handleFilterShortMovies={handleFilterShortMovies}
        />

      </section>

  );
};

export default SearchForm;