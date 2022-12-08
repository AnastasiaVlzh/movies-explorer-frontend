import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import ServerError from '../ServerError/ServerError'


function MoviesCardList ({movies,isNotSuccessRequest,onMovieLike,moviesSaved,isLikedAndSaved,onMovieDelete,isSavedMoviesList,isNotFound}) {
  
  const [moviesPerPage, setMoviesPerPage] = React.useState(0);
  const [moviesAddToPage, setMoviesAddToPage] = React.useState(0)


  const checkWindowWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1101) {
      setMoviesPerPage(12);
      setMoviesAddToPage(3);
    } else if (screenWidth < 1100 && screenWidth > 750) {
      setMoviesPerPage(8);
      setMoviesAddToPage(2);
    } else if (screenWidth < 749) {
      setMoviesPerPage(5);
      setMoviesAddToPage(2);
    }
  };


  function loadMore() {
    setMoviesPerPage((moviesPerPage) => moviesPerPage + moviesAddToPage)
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
            {movies.slice(0,moviesPerPage).map((item) => {
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