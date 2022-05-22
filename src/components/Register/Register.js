import { Link } from "react-router-dom"

export default function Register(props) {

    function handleRegister(event) {
        event.preventDefault();
        props.handleRegister();
    }

    return(
        <form onSubmit={handleRegister} className="register">
            <fieldset className="register__container">
                <Link to="/" className="register__logo"> </Link>
                <h2 className="register__header">Добро пожаловать!</h2>
                <div className="register__form">
                    <p className="register__field">Имя</p>
                    <input className="register__input"
                        onChange={props.handleChange}
                        type="text"
                        name="name"
                        value={props.values.name || ''}
                        placeholder="Имя"
                        minLength="2"
                        maxLength="30"
                        required>
                    </input>
                    <span className="register__error register__error_name">{props.errors.name}</span>
                    <p className={`register__field ${props.errors.name && 'register__field_margin'}`}>E-mail</p>
                    <input className="register__input"
                        onChange={props.handleChange}
                        type="email"
                        name="email"
                        value={props.values.email || ''}
                        placeholder="E-mail"
                        required>
                    </input>
                    <span className="register__error register__error_email">{props.errors.email}</span>
                    <p className={`register__field ${props.errors.email && 'register__field_margin'}`}>Пароль</p>
                    <input className="register__input" 
                        onChange={props.handleChange}
                        type="password"
                        name="password"
                        value={props.values.password || ''} 
                        placeholder="Password"
                        minLength="8"
                        maxLength="30"
                        required>
                    </input>
                    <span className="register__error register__error_password">{props.errors.password}</span>
                    <span className="register__error register__error_submit">{props.textError}</span>
                    <button className={`register__button ${!props.isValid && 'register__button_disabled'}`} type="submit" disabled={!props.isValid}>Зарегистрироваться</button>
                    <p className="register__question">Уже зарегистрированы?<Link to="/signin" onClick={props.resetForm} className="register__question-link">Войти</Link></p>
                </div>
            </fieldset>
        </form>
    )
}