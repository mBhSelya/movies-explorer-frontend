import { Link } from "react-router-dom"

export default function Login() {
    
    return(
        <form className="login">
            <fieldset className="login__container">
                <Link to="/" className="login__logo"> </Link>
                <h2 className="login__header">Рады видеть!</h2>
                <div className="login__form">
                    <p className="login__field">E-mail</p>
                    <input className="login__input" 
                        type="email" 
                        value={'pochta@yandex.ru'}
                        placeholder="E-mail"
                        minLength="1"
                        maxLength="30"
                        required>
                    </input>
                    <p className="login__field">Пароль</p>
                    <input className="login__input" 
                        type="password" 
                        value={'123456789'} 
                        placeholder="password"
                        minLength="8"
                        maxLength="30"
                        required>
                    </input>
                    <button className="login__button">Войти</button>
                    <p className="login__question">Еще не зарегистрированы?<Link to="/signup" className="login__question-link">Регистрация</Link></p>
                </div>
            </fieldset>
        </form>
    )
}