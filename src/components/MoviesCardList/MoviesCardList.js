import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList () {
  return (
      <section className="elements">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
      </section>
  );
};

export default MoviesCardList;