import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import ServerError from '../ServerError/ServerError'

const width = window.innerWidth

function MoviesCardList ({movies,isNotSuccessRequest,onMovieLike,moviesSaved,isLikedAndSaved,onMovieDelete,isSavedMoviesList}) {
  

  const [moviesPerPage, setMoviesPerPage] = React.useState(() => {
    if (width < 480){
      return 5
    } else if (width < 768){
      return 8
    } else if (width > 780){
      return 12
    }
  });

  const sliceMovies = movies?.slice(0,moviesPerPage)

  const handleMovieDisplay = () => {
    const width = window.innerWidth
    if (width < 480){
      setMoviesPerPage(5)
    } else if (width < 768){
      setMoviesPerPage(8)
    } else if (width > 780){
      setMoviesPerPage(12)
    }
  }
  
  const loadMore = () =>{
    if (width < 480){
      setMoviesPerPage(moviesPerPage + 1)
    } else if (width < 768){
      setMoviesPerPage(moviesPerPage + 2)
    } else if (width > 780){
      setMoviesPerPage(moviesPerPage + 3)
    }
  }

  React.useEffect(() => {
    window.addEventListener('resize', function(){
      setTimeout (handleMovieDisplay, 100);
    })
  },[])

  return (
      <section className="elements__container">
      {isNotSuccessRequest ? (
        <ServerError />
      ) :
      (sliceMovies.length === 0) ? (
        <p className="elements__notfound">Ничего не найдено</p>
      ):(
              <div className="elements">
            {sliceMovies?.map((item) => {
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
      )}
        <div className="loadingButton" >
        {moviesPerPage < movies?.length &&
            <button onClick={() => loadMore()} className="loadingButton__button" type="button">Ещё</button>
        }
        </div>
      </section>
  );
};

export default MoviesCardList;