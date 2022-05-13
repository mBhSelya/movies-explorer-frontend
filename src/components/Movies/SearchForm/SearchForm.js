import magnifyingGlass from '../../../images/magnifying-glass.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


export default function SearchForm() {
    
    return(
        <section className="search-form">
            <div className='search-form__border'>
                <div className="search-form__field">
                    <div className='search-form__input-field'>
                        <div className='search-form__icon-and-input'>
                            <img alt='Иконка лупы' className="search-form__icon" src={magnifyingGlass}></img>
                            <input className='search-form__input' placeholder='Фильмы'></input>
                        </div>
                        <button className='search-form__button' type='button'></button>
                    </div>
                        <FilterCheckbox />
                </div>
            </div>
        </section>
    )
}