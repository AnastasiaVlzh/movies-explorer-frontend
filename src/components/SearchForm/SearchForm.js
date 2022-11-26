import { useState } from "react";
import './SearchForm.css';
import Button from "../button/button";
import Input from "../input/input";
import Checkbox from "../checkbox/checkbox";
import React from 'react';

function SearchForm ({onSubmit,onInput,filterMovies,movies,handleFilterMovies}) {

//   const [query, setQuery] = React.useState('');

//   function onInputHandler(value){
//     setQuery(value);
// }

  function handleInput(event){
    onInput(event.target.value)
  }

//   function handleSubmit(event) {
//     event.preventDefault();

//     onSubmit(query);
// }

  return (
      <section className="search">
        <form onSubmit={onSubmit} className="search__form">
            <Input 
            placeholder= "Фильм"
            onInputHandler={onInput}
            onInput={handleInput}
            />
            <Button/>
        </form>
        <Checkbox
        filterMovies={filterMovies}
        movies={movies}
        handleFilterMovies={handleFilterMovies}
        />

      </section>

  );
};

export default SearchForm;