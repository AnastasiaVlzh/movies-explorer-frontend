import './MoviesCard.css';
import React from 'react';

function MoviesCard ({card,onMovieLike,onMovieDelete,isSavedMoviesList,moviesSaved}) {

    const isLikedAndSaved = moviesSaved
    ? moviesSaved.some((m) => m.movieId === card.id)
    : false;
 
    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + 'ч. ' + minutes + 'м.';
    };

    function handleLikeClick(){
        onMovieLike(card)
    }

    function handleDeleteClick(){
        onMovieDelete(card)
    }



    return (
            <div className="movie" >
                <a href={card.trailerLink} target="_blank" rel="noreferrer"><img className="movie__picture" src={ isSavedMoviesList
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
                } alt="карточка фильма" /></a>
                <div className="movie__detail">
                    <h2 className="movie__name">{card.nameRU}</h2>
                    { isSavedMoviesList ? 
                    ( <button type="button" className = {'movie__delete'} onClick={handleDeleteClick} />)
                    : 
                    (isLikedAndSaved ? 
                    (  <button type="button" onClick={handleDeleteClick} className = 'movie__like movie__like_active' />)
                    : ( <button type="button" onClick={handleLikeClick} className = "movie__like " /> )
                    )}
                </div>
            <div className="movie__time">{getTimeFromMins(card.duration)}</div>
            </div>

      );
};

export default MoviesCard;