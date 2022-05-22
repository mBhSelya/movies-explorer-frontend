import MoviesCard from "../MoviesCard/MoviesCard"
import Preloader from "../Preloader/Preloader"

export default function MoviesCardList(props) {
    return(
        <section className="cards">
            <div className={`cards__list ${!props.more && 'cards__list_no-button'}`}>
                {props.isLoading ?
                <Preloader />
                : props.shownCards.length === 0 ?
                    <p className={`cards__message ${props.messageActive && 'cards__message_active'}`}>{props.messageCards}</p>
                : props.shownCards.map((cardInfo) => ( 
                        <MoviesCard 
                            key={cardInfo.id}
                            dataCard = {cardInfo}
                            handleLikeMovies={props.handleLikeMovies}
                            saveCards={props.saveCards}
                        />
                    )) 
                }
            </div>
           <button onClick={props.showMore} type="button" className={`cards__button ${props.more && 'cards__button_active'}`}>Ещё</button>
        </section>
    )
}