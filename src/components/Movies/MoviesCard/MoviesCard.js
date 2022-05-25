import { minutesInAnHour } from "../../../utils/constants";

export default function MoviesCard(props) {
    let isLike;
    if (props.saveCards === []) {
        isLike = false;
    } else {
        isLike = props.saveCards.some(card => card.movieId === props.dataCard.id)
    }

    function handleSaveCard() {
        props.handleLikeMovies(
            props.dataCard.country,
            props.dataCard.director,
            props.dataCard.duration,
            props.dataCard.year,
            props.dataCard.description,
            `https://api.nomoreparties.co/${props.dataCard.image.url}`,
            props.dataCard.trailerLink ? 
                props.dataCard.trailerLink.slice(0, 5) === 'https' ?
                props.dataCard.trailerLink :
                "https://youtube.com" :
                "https://youtube.com",
            props.dataCard.nameRU,
            props.dataCard.nameEN ?
                props.dataCard.nameEN :
                'Нет перевода',
            `https://api.nomoreparties.co/${props.dataCard.image.formats.thumbnail.url}`,
            props.dataCard.id,
            )
    }
    
    return(
        <article className="card">
            <a href={`${props.dataCard.trailerLink ? 
                props.dataCard.trailerLink.slice(0, 5) === 'https' ?
                props.dataCard.trailerLink :
                "https://youtube.com" :
                "https://youtube.com"}`} target="_blank" rel="noopener noreferrer">
                <img className='card__picture' src={`https://api.nomoreparties.co/${props.dataCard.image.formats.thumbnail.url}`} alt={`${props.dataCard.image.name}`}></img>
            </a>
            <div className="card__info">
                <div>
                    <h2 className="card__title">{props.dataCard.nameRU}</h2>
                    <p className='card__duration'>{`${Math.floor(props.dataCard.duration/minutesInAnHour)}ч ${!(props.dataCard.duration%minutesInAnHour === 0) ? `${props.dataCard.duration%minutesInAnHour}м` : ` `}`}</p>
                </div>
                <button onClick={handleSaveCard} className={`card__button ${isLike && 'card__button_active'}`}></button>
            </div>
        </article>
    )
}