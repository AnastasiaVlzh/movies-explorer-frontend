import './button.css';
import searchButton from '../../images/find-button.svg';

function Button() {
  return (
    <img 
    type="button" 
    className="button"
    src={searchButton} 
    alt="Кнопка поиска"
    />
  );
}

export default Button;