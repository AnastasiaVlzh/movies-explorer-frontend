import './input.css';
import React from 'react';

function Input({placeholder,onInput,setInput}) {


  return (
    <input 
    type="text" 
    className="input"
    placeholder={placeholder}
    onInput={onInput}
    required
    value={setInput}
    
    />
  );
}

export default Input;