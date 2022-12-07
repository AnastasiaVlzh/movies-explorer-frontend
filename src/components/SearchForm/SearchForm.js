import { useState } from "react";
import './SearchForm.css';
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";
import React from 'react';
import {useForm} from 'react-hook-form'

function SearchForm (props) {

  const {
    register,
    formState:{
      errors, 
    },
    handleSubmit,

} = useForm({
    mode:'onSubmit',
    reValidateMode: 'onSubmit'
})



  return (
      <section className="search">
        <form onSubmit={handleSubmit(props.onSubmit)} className="search__form">
        <div className="search__form_input">
          <input 
            type="text" 
            name="input"
            id='input'
            className="search__input"
            placeholder="Фильм"
            onInput={props.onInput}
            value={props.query}
            {...register("input", { required: true })}
            />
            <span className="search__error">{errors?.input && <p className="search__error_text" > {errors?.input.message || "Нужно ввести ключевое слово"}</p>}</span>
        </div>
        <Button />
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