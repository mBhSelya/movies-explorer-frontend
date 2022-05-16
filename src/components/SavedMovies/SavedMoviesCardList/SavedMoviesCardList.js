import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard"

export default function MoviesCardList(props) {
    
    return(
        <section className="saved-cards">
            <div className={`saved-cards__list ${!props.more && 'saved-cards__list_no-button'}`}>
                <SavedMoviesCard />
                <SavedMoviesCard />
                <SavedMoviesCard />
                <SavedMoviesCard />
                <SavedMoviesCard />
                <SavedMoviesCard />
                <SavedMoviesCard />
            </div>
           <button type="button" className={`saved-cards__button ${props.more && 'saved-cards__button_active'}`}>Ещё</button>
        </section>
    )
}