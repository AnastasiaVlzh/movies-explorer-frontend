import "../Movies/Movies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";


function SavedMovies(props) {
  
  return (
    <section>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;