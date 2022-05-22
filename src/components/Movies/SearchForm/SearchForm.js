import magnifyingGlass from '../../../images/magnifying-glass.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


export default function SearchForm(props) {

    function handleSearchNameMovie(event) {
        props.setSearchNameMovie(event.target.value);
    }

    function handleSubmitForm(event) {
        event.preventDefault()
        props.onSubmit()
    }
    
    return(
        <section className="search-form">
            <div className='search-form__border'>
                <div className="search-form__field">
                    <form onSubmit={handleSubmitForm} className='search-form__input-field'>
                        <div className='search-form__icon-and-input'>
                            <img alt='Иконка лупы' className="search-form__icon" src={magnifyingGlass}></img>
                            <input className='search-form__input'
                                placeholder='Фильмы'
                                type="text"
                                minLength="1"
                                maxLength="30"
                                onChange={handleSearchNameMovie}
                                value={props.searchNameMovie}
                                required>
                            </input>
                        </div>
                        <button className='search-form__button' type='submit'></button>
                    </form>
                        <FilterCheckbox 
                            shortMovie={props.shortMovie}
                            setShortMovie={props.setShortMovie}
                        />
                </div>
            </div>
        </section>
    )
}