import "./Footer.css"
import { useLocation } from 'react-router-dom';

function Footer() {
    let location = useLocation();
    return (
      <footer className={
        location.pathname === '/'
          ? 'footer'
          : location.pathname === '/movies'
          ? 'footer'
          : location.pathname === '/saved-movies'
          ? 'footer'
          : 'footer__auth'
      }>
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__info" >
            <p className="footer__text_black">© 2022</p>
            <div className="footer__info_practicum">
                <p className="footer__info-link"><a className="link footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" >Яндекс.Практикум</a></p>
                <p className="footer__info-link"><a className="link footer__link" href="https://github.com/" target="_blank" rel="noreferrer" >Github</a></p>
            </div>

          </div>
      </footer>
    );
  }
  
  export default Footer;