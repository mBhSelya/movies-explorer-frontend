import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Movies() {
    
    return(
        <>
            <Header 
                dark={false}
                isLoggenIn={true}
            />
            <SearchForm />
            <MoviesCardList
                more={true}
            />
            <Footer />
        </>
        
    )
}