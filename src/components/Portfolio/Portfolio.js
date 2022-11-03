import './Portfolio.css'
import portfolioLink from '../../images/link_portfolio.svg'

function Portfolio() {
  return (
    <div className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__links">
            <li className="portfolio__link">
                <a href='https://github.com/AnastasiaVlzh/how-to-learn' className="link portfolio__link_text" >Статичный сайт</a>
                <a className="link portfolio__link_text" href='https://github.com/AnastasiaVlzh/how-to-learn'>
                    <img className="portfolio__link_image" alt='Ссылка в виде стрелочки' src={portfolioLink} /> 
                </a>
                  
            </li>
            <li className="portfolio__link">
                <a href='https://github.com/AnastasiaVlzh/russian-travel' className="link portfolio__link_text">Адаптивный сайт</a>
                <a className="link portfolio__link_text" href='https://github.com/AnastasiaVlzh/russian-travel'>
                    <img className="portfolio__link_image" alt='Ссылка в виде стрелочки' src={portfolioLink} /> 
                </a>
            </li>
            <li className="portfolio__link">
                <a href='https://github.com/AnastasiaVlzh/react-mesto-api-full' className="link portfolio__link_text">Одностраничное приложение</a>
                <a className="link portfolio__link_text" href='https://github.com/AnastasiaVlzh/russian-travel'>
                    <img className="portfolio__link_image" alt='Ссылка в виде стрелочки' src={portfolioLink} /> 
                </a>
            </li>
        </ul>

    </div>

  );
}

export default Portfolio;