import { Link } from "react-router-dom"

export default function Login(props) {

    function handleLogin(event) {
        event.preventDefault();
        props.handleLogin();
    }
    
    return(
        <form onSubmit={handleLogin} className="login">
            <fieldset className="login__container">
                <Link to="/" className="login__logo"> </Link>
                <h2 className="login__header">Рады видеть!</h2>
                <div className="login__form">
                    <p className="login__field">E-mail</p>
                    <input className="login__input" 
                        onChange={props.handleChange}
                        type="email" 
                        name="email"
                        value={props.values.email || ''}
                        placeholder="E-mail"
                        required>
                    </input>
                    <span className="login__error login__error_email">{props.errors.email}</span>
                    <p className={`login__field ${props.errors.email && 'login__field_margin'}`}>Пароль</p>
                    <input className="login__input"
                        onChange={props.handleChange} 
                        type="password"
                        name="password" 
                        value={props.values.password || ''} 
                        placeholder="Password"
                        minLength="8"
                        maxLength="30"
                        required>
                    </input>
                    <span className="login__error login__error_password">{props.errors.password}</span>
                    <span className="login__error login__error_submit">{props.textError}</span>
                    <button className={`login__button ${!props.isValid && 'login__button_disabled'}`} type="submit" disabled={!props.isValid}>Войти</button>
                    <p className="login__question">Еще не зарегистрированы?<Link to="/signup" onClick={props.resetForm} className="login__question-link">Регистрация</Link></p>
                </div>
            </fieldset>
        </form>
    )
}