import SearchForm from '../Movies/SearchForm/SearchForm';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useEffect } from 'react';

export default function SavedMovies(props) {
    useEffect(() => {
        props.setSearchNameMovie('');
        props.shortMovie && props.setShortMovie(false);
        props.setMessageActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <>
            <Header 
                dark={false}
                isLoggenIn={true}
            />
            <SearchForm 
                searchNameMovie={props.searchNameMovie}
                setSearchNameMovie={props.setSearchNameMovie}
                shortMovie={props.shortMovie}
                setShortMovie={props.setShortMovie}
                onSubmit={props.onSubmit}
            />
            <SavedMoviesCardList
                more={false}
                saveCards={props.saveCards}
                handleLikeMovies={props.handleLikeMovies}
                messageActive={props.messageActive}
                messageCards={props.messageCards}
            />
            <Footer />
        </>
    )
}