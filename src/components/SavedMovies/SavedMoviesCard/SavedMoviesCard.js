import pic from '../../../images/photo.avif'
import React, { useState } from "react";

export default function MoviesCard() {

    const [saveCard, setSaveCard] = useState(false);

    function handleSaveCard() {
        if (saveCard) {
            setSaveCard(false);
        } else {
            setSaveCard(true);
        }
    }
    
    return(
        <article className="saved-card">
            <img className='saved-card__picture' alt="Обложка фильма" src={pic}></img>
            <div className="saved-card__info">
                <div>
                    <h2 className="saved-card__title">33 слова о дизайне</h2>
                    <p className='saved-card__duration'>1ч42м</p>
                </div>
                <button onClick={handleSaveCard} className={`saved-card__button ${saveCard && 'saved-card__button_active'}`}></button>
            </div>
        </article>
    )
}