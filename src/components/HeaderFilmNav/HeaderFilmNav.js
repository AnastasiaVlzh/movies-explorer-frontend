import './HeaderFilmNav.css'
import { NavLink } from 'react-router-dom';
import accountPic from '../../images/icon__COLOR_icon-main.svg'

function HeaderMainNav(props) {
    return (
      <section className="header__menu">
          <nav className="header__line-menu">
            <NavLink to="/movies" className="link header__link">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="link header__link" >Сохраненные фильмы</NavLink>
            <NavLink to="/profile" className="link header__link" >Аккаунт
              <img className="header__picture" src={accountPic} alt="Логотип аккаунта" />
            </NavLink>
          </nav>
          <nav className='header__menu-btns' onClick={props.onMobileMenu}>
            <span className='header__menu-btn'></span>
            <span className='header__menu-btn'></span>
            <span className='header__menu-btn'></span>
          </nav>
      </section>

    );
  }
  
  export default HeaderMainNav;