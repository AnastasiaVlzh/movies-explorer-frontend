import { useState } from "react";
import './SearchForm.css';
import Button from "../button/button";
import Input from "../input/input";
import Checkbox from "../checkbox/checkbox";
import React from 'react';

function SearchForm (props) {

  const [queryShort, setQueryShort] = React.useState('');


function onInputHandlerShort(value){
  setQueryShort(value);
}

function handleInputShort(event){
  onInputHandlerShort(event.target.value)
}


  return (
      <section className="search">
        <form onSubmit={props.onSubmit} className="search__form">
            <Input 
            placeholder= "Фильм"
            onInputHandler={props.onInput}
            onInput={!props.isSavedMoviesList? props.onInput : handleInputShort }
            setInput={!props.isSavedMoviesList? props.query : queryShort}
            isSavedMoviesList={props.isSavedMoviesList}
            />
            <Button/>
        </form>
        <Checkbox
        filterMovies={props.filterMovies}
        filterShortMovies={props.filterShortMovies}
        movies={props.movies}
        handleFilter={props.handleFilter}
        isSavedMoviesList={props.isSavedMoviesList}
        checked={props.checked}
        setChecked={props.setChecked}
        />

      </section>

  );
};

export default SearchForm;