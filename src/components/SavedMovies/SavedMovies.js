import "../Movies/Movies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";


function SavedMovies(props) {
  
  return (
    <section>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;