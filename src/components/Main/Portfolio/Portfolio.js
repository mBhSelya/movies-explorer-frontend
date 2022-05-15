export default function Portfolio() {
    
    return(
        <section className="portfolio">
                <h2 className="portfolio__header">Портфолио</h2>
                <div className="portfolio__items">
                    <a href="https://github.com/mBhSelya/how-to-learn" target="_blank" rel="noopener noreferrer" className="portfolio__item">
                        <span className="portfolio__item-name">Статичный сайт</span>
                        <span className="portfolio__icon">&#8599;</span>
                    </a>
                    <a href="https://github.com/mBhSelya/russian-travel" target="_blank" rel="noopener noreferrer" className="portfolio__item">
                        <span className="portfolio__item-name">Адаптивный сайт</span>
                        <span className="portfolio__icon">&#8599;</span>
                    </a>
                    <a href="https://github.com/mBhSelya/react-mesto-api-full" target="_blank" rel="noopener noreferrer" className="portfolio__item">
                        <span className="portfolio__item-name">Одностраничное приложение</span>
                        <span className="portfolio__icon">&#8599;</span>
                    </a>
                </div>
        </section>
    )
}