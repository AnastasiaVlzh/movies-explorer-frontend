import { useState } from "react";
import './SearchForm.css';
import Button from "../button/button";
import Input from "../input/input";
import Checkbox from "../checkbox/checkbox";

function SearchForm () {

    const [query, setQuery] = useState('');

    function onInput(value){
      setQuery(value);
    }
  
    function onSubmitHandler(event){
      console.log(event);
      event.preventDefault();
    }

  return (
      <section className="search">
        <form onSubmit={onSubmitHandler} className="search__form">
            <Input 
            placeholder= "Фильм"
            onInputHandler={onInput}
            />
            <Button/>
        </form>
        <Checkbox/>
      </section>

  );
};

export default SearchForm;