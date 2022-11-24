import { useState } from "react";
import './SearchForm.css';
import Button from "../button/button";
import Input from "../input/input";
import Checkbox from "../checkbox/checkbox";

function SearchForm ({onSubmit,onInput,filterMovies,movies,handleFilterMovies}) {

  return (
      <section className="search">
        <form onSubmit={onSubmit} className="search__form">
            <Input 
            placeholder= "Фильм"
            onInputHandler={onInput}
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