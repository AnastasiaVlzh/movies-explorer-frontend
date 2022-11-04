import './MobileMenu.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import accountPic from '../../images/icon__COLOR_icon-main.svg'

function MobileMenu ({isOpen,onClose}) {
    return(
      <ul className={ !isOpen ? `mobile__menu`  : `mobile__menu mobile__menu-active` }>
            <li className="mobile__menu-link">
                <NavLink
                activeClassName="header__link-active"
                className="header__link header__link-mobile"
                exact to="/"
                onClick={onClose}
                > 
                Главная
                </NavLink>
                <NavLink
                activeClassName="header__link-active"
                className="header__link header__link-mobile"
                to="/movies"
                onClick={onClose}
                > 
                Фильмы
                </NavLink>
                <NavLink
                activeClassName="header__link-active"
                className="header__link header__link-mobile"
                to="/saved-movies"
                onClick={onClose}
                > 
                Сохраненные фильмы
                </NavLink>
                <NavLink
                activeClassName="header__link-active"
                className="header__link header__link-mobile"
                to="/profile"
                onClick={onClose}
                > 
                Аккаунт
                <img className="header__picture" src={accountPic} alt="Логотип аккаунта" />
                </NavLink>
            </li>

          <button className="menu__close" onClick={onClose} type="button"></button>
      </ul>
    );
  }
  
  export default MobileMenu;