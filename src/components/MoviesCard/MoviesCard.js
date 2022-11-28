import './MoviesCard.css';
import firstMovieImg from '../../images/film_1.svg';
import { useLocation } from 'react-router-dom';

function MoviesCard () {
    let location = useLocation();

    return (
            <div className="movie" >
                <img className="movie__picture" src={firstMovieImg} alt="карточка фильма" />
                <div className="movie__detail">
                    <h2 className="movie__name">33 слова о дизайне</h2>
                    <button type="button" className = {
                        location.pathname === '/movies'
                            ? 'movie__like'
                            : 'movie__delete'
                        } />
                </div>
            <div className="movie__time">1ч 47м</div>
            </div>

      );
};

export default MoviesCard;