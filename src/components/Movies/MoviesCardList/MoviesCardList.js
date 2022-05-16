import MoviesCard from "../MoviesCard/MoviesCard"

export default function MoviesCardList(props) {
    
    return(
        <section className="cards">
            <div className={`cards__list ${!props.more && 'cards__list_no-button'}`}>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
           <button type="button" className={`cards__button ${props.more && 'cards__button_active'}`}>Ещё</button>
        </section>
    )
}