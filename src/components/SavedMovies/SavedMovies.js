import SearchForm from '../Movies/SearchForm/SearchForm';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function SavedMovies() {
    
    return(
        <>
            <Header 
                dark={false}
                isLoggenIn={true}
            />
            <SearchForm />
            <SavedMoviesCardList
                more={false}
            />
            <Footer />
        </>
    )
}