export default function FilterCheckbox(props) {
    
    return(
        <section className="checkbox">
            <input type="checkbox"
                id="switch"
                className="checkbox__input"
                checked={props.shortMovie}
                onChange={props.setShortMovie}>
            </input>
            <label htmlFor="switch" className="checkbox__label">Короткометражки</label>
        </section>
    )
}