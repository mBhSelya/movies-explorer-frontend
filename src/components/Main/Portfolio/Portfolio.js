export default function Portfolio() {
    
    return(
        <section className="portfolio">
                <h2 className="portfolio__header">Портфолио</h2>
                <div className="portfolio__items">
                    <div className="portfolio__item">
                        <span className="portfolio__item-name">Статичный сайт</span>
                        <span className="portfolio__icon">&#8599;</span>
                    </div>
                    <div className="portfolio__item">
                        <span className="portfolio__item-name">Адаптивный сайт</span>
                        <span className="portfolio__icon">&#8599;</span>
                    </div>
                    <div className="portfolio__item">
                        <span className="portfolio__item-name">Одностраничное приложение</span>
                        <span className="portfolio__icon">&#8599;</span>
                    </div>
                </div>
        </section>
    )
}