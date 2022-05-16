import { Link } from "react-router-dom"

export default function Error() {
    
    return(
        <section className="error">
            <h2 className="error__header">404</h2>
            <p className="error__description">Страница не найдена</p>
            <Link to="/" className="error__return">Назад</Link>
        </section>
    )
}