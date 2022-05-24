export default function Error() {

    function handleBackButton() {
        window.history.back()
    }
    
    return(
        <section className="error">
            <h2 className="error__header">404</h2>
            <p className="error__description">Страница не найдена</p>
            <button onClick={handleBackButton} className="error__return">Назад</button>
        </section>
    )
}