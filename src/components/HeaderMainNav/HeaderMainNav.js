import './HeaderMainNav.css'
import { NavLink } from 'react-router-dom';

function HeaderMainNav() {
    return (
        <nav className="header__menu_main">
            <NavLink to="/signup" className="link header__link">Регистрация</NavLink>
            <NavLink to="/signin" className="link header__link_signin">Войти</NavLink>
        </nav>
    );
  }
  
  export default HeaderMainNav;