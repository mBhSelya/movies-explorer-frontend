import earthLogo from '../../../images/text-logo.svg';

export default function Promo(props) {
    
    return(
        <section className='promo'>
            <div className='promo__width'>
                <div className='promo__info'>
                    <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
                    <span className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
                    <button className='promo__button'>Узнать больше</button>
                </div>
                <img className='promo__image' alt='Картинка' src={earthLogo}></img>
            </div>
        </section>
    )
}