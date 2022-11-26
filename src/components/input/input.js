import './input.css';
import React from 'react';

function Input({placeholder,onInput}) {

//   const [query, setQuery] = React.useState('');

//   function onInputHandler(value){
//     setQuery(value);
// }

//   function handleInput(event){
//     onInputHandler(event.target.value)
//   }

  return (
    <input 
    type="text" 
    className="input"
    placeholder={placeholder}
    onInput={onInput}
    required
    
    />
  );
}

export default Input;