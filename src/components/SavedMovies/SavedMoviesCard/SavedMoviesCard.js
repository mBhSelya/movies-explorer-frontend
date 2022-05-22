
export default function SavedMoviesCard(props) {
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
            props.dataCard.image,
            props.dataCard.trailerLink ? 
                props.dataCard.trailerLink.slice(0, 5) === 'https' ?
                props.dataCard.trailerLink :
                "https://youtube.com" :
                "https://youtube.com",
            props.dataCard.nameRU,
            props.dataCard.nameEN ?
                props.dataCard.nameEN :
                'Нет перевода',
            props.dataCard.thumbnail,
            props.dataCard.movieId,
            )
    }
    
    return(
        <article className="saved-card">
            <a href={`${props.dataCard.trailerLink ? 
                props.dataCard.trailerLink.slice(0, 5) === 'https' ?
                props.dataCard.trailerLink :
                "https://youtube.com" :
                "https://youtube.com"}`} target="_blank" rel="noopener noreferrer">
                <img className='saved-card__picture' alt={`${props.dataCard.image.name}`} src={props.dataCard.thumbnail}></img>
            </a>
            <div className="saved-card__info">
                <div>
                    <h2 className="saved-card__title">{props.dataCard.nameRU}</h2>
                    <p className='saved-card__duration'>{`${Math.floor(props.dataCard.duration/60)}ч ${!(props.dataCard.duration%60 === 0) ? `${props.dataCard.duration%60}м` : ` `}`}</p>
                </div>
                <button onClick={handleSaveCard} className={`saved-card__button ${isLike && 'saved-card__button_active'}`}></button>
            </div>
        </article>
    )
}