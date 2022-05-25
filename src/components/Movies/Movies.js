import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useEffect } from 'react';

export default function Movies(props) {

    useEffect(() => {
        props.setSearchNameMovie('')
        props.returnToMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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
            <MoviesCardList
                more={props.more}
                shownCards={props.shownCards}
                showMore={props.showMore}
                messageActive={props.messageActive}
                messageCards={props.messageCards}
                isLoading={props.isLoading}
                handleLikeMovies={props.handleLikeMovies}
                saveCards={props.saveCards}
            />
            <Footer />
        </>
        
    )
}