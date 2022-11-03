import "./Movies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";


function Movies(props) {
  
  return (
    <section>
      <SearchForm />
      <MoviesCardList />
      <Preloader />
    </section>
  );
}

export default Movies;