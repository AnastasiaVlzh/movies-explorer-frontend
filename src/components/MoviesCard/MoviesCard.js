import './MoviesCard.css';
import firstMovieImg from '../../images/film_1.svg';

function MoviesCard () {
    return (
            <div className="movie" >
                <img className="movie__picture" src={firstMovieImg} alt="карточка фильма" />
                <div className="movie__detail">
                    <h2 className="movie__name">33 слова о дизайне</h2>
                    <button className="movie__like" type="button" />
                </div>
            <div className="movie__time">1ч 47м</div>
            </div>

      );
};

export default MoviesCard;