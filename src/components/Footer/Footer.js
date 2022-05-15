export default function Footer() {
    
    return(
        <section className="footer">
            <p className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__bottom">
                <p className="footer__copy">&copy; 2022</p>
                <ul className="footer__links">
                    <li className="footer__link"><a className="footer__link-text" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a></li>
                    <li className="footer__link"><a className="footer__link-text" href="https://github.com/mBhSelya" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li className="footer__link"><a className="footer__link-text" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                </ul>
            </div>
        </section>
    )
}