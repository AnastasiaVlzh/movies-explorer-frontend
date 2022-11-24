import './input.css';

function Input({placeholder,onInputHandler}) {

  function handleInput(event){
    onInputHandler(event.target.value)
  }

  return (
    <input 
    type="text" 
    className="input"
    placeholder={placeholder}
    onInput={handleInput}
    required
    
    />
  );
}

export default Input;