import { Link } from "react-router-dom"

export default function Register() {
    
    return(
        <form className="register">
            <fieldset className="register__container">
                <Link to="/" className="register__logo"> </Link>
                <h2 className="register__header">Добро пожаловать!</h2>
                <div className="register__form">
                    <p className="register__field">Имя</p>
                    <input className="register__input" 
                        type="text" 
                        value={'Виталий'}
                        placeholder="Имя"
                        minLength="1"
                        maxLength="30"
                        required>
                    </input>
                    <p className="register__field">E-mail</p>
                    <input className="register__input"
                        type="email" 
                        value={'pochta@yandex.ru'}
                        placeholder="E-mail"
                        minLength="1"
                        maxLength="30"
                        required>
                    </input>
                    <p className="register__field">Пароль</p>
                    <input className="register__input" 
                        type="password" 
                        value={'123456789'} 
                        placeholder="password"
                        minLength="8"
                        maxLength="30"
                        required>
                    </input>
                    <span className="register__error">Что-то пошло не так...</span>
                    <button className="register__button">Зарегистрироваться</button>
                    <p className="register__question">Уже зарегистрированы?<Link to="/signin" className="register__question-link">Войти</Link></p>
                </div>
            </fieldset>
        </form>
    )
}