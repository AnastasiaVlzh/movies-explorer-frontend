import headerLogo from '../../images/logo/logo.svg';
import './header.css'
import HeaderMainNav from '../HeaderMainNav/HeaderMainNav';
import HeaderFilmNav from '../HeaderFilmNav/HeaderFilmNav';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header() {
  let location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function handleMobileMenuClick(){
    setIsMobileMenuOpen(true);
  }

  function closeMenu(){
    setIsMobileMenuOpen(false);
  }

  return (
    <div className={
      location.pathname === '/'
        ? 'header'
        : location.pathname === '/movies'
        ? 'header'
        : location.pathname === '/saved-movies'
        ? 'header'
        : location.pathname === '/profile'
        ? 'header'
        : 'header__auth'
    }>
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="Логотип страницы" />
        </Link>
        <nav>
        {location.pathname === '/' ? 
        <HeaderMainNav /> : 
        <HeaderFilmNav 
          onMobileMenu={handleMobileMenuClick}
        />}
        </nav>
        <MobileMenu
          isOpen={isMobileMenuOpen} 
          onClose={closeMenu}
        />
    </div>
  );
}

export default Header;