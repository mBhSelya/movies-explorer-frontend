import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";
import Preloader from "../../Movies/Preloader/Preloader";

export default function MoviesCardList(props) {
    return(
        <section className="saved-cards">
            <div className={`saved-cards__list ${!props.more && 'saved-cards__list_no-button'}`}>
                {props.isLoading ?
                    <Preloader />
                    : props.saveCards.length === 0 ?
                        <p className={`saved-cards__message ${props.messageActive && 'saved-cards__message_active'}`}>{props.messageCards}</p>
                    : props.saveCards.map((cardInfo) => (
                        <SavedMoviesCard 
                            key={cardInfo.movieId}
                            dataCard = {cardInfo}
                            handleLikeMovies={props.handleLikeMovies}
                            saveCards= {props.saveCards}
                        />
                    ))
                }
            </div>
        </section>
    )
}