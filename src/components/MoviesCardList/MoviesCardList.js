import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import ServerError from '../ServerError/ServerError'


function MoviesCardList ({movies,isNotSuccessRequest,onMovieLike,moviesSaved,isLikedAndSaved,onMovieDelete,isSavedMoviesList,isNotFound}) {
  

  const [moviesPerPage, setMoviesPerPage] = React.useState(12);
  const [moviesAddToPage, setMoviesAddToPage] = React.useState(3);

  const sliceMovies = movies.slice(0,moviesPerPage)

  const checkWindowWidth = () => {
    const screenWidth = window.screen.width;

    if (screenWidth >= 1280) {
      setMoviesPerPage(12);
      setMoviesAddToPage(3);
    } else if (screenWidth < 1280 && screenWidth > 761) {
      setMoviesPerPage(8);
      setMoviesAddToPage(2);
    } else {
      setMoviesPerPage(5);
      setMoviesAddToPage(1);
    }
  };


  const loadMore = () => {
    setMoviesPerPage(moviesPerPage + moviesAddToPage);
  };

  React.useEffect(() => {
    checkWindowWidth();
  }, [movies]);


  window.onresize = (event) => {
    setTimeout(checkWindowWidth, 50);
  };



  return (
      <section className="elements__container">
      {isNotSuccessRequest ? (
        <ServerError />
      ) :
      isNotFound ? (
        <p className="elements__notfound">Ничего не найдено</p>
      )
      :
      (
              <div className="elements">
            {sliceMovies.map((item) => {
            return (
              <MoviesCard
                card={item}
                key={ isSavedMoviesList ? item.movieId : item.id}
                image={`https://api.nomoreparties.co${item.image.url}`}
                nameRU={item.nameRU}
                duration={item.duration}
                trailerLink={item.trailerLink}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
                moviesSaved={moviesSaved}
                isSavedMoviesList={isSavedMoviesList}
              />
              
            );
          })}
      </div>
      )
      }
        <div className="loadingButton" >
        {moviesPerPage < movies.length &&
            <button onClick={() => loadMore()} className="loadingButton__button" type="button">Ещё</button>
        }
        </div>
      </section>
  );
};

export default MoviesCardList;