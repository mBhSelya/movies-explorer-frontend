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
        <article className="card">
            <img className='card__picture' alt="Обложка фильма" src={pic}></img>
            <div className="card__info">
                <div>
                    <h2 className="card__title">33 слова о дизайне</h2>
                    <p className='card__duration'>1ч42м</p>
                </div>
                <button onClick={handleSaveCard} className={`card__button ${saveCard && 'card__button_active'}`}></button>
            </div>
        </article>
    )
}