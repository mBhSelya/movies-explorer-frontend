import iconAccountBlack from "../../images/icon__account.svg";
import iconAccountWhite from "../../images/icon__account-white.svg";
import iconBurgerBlack from "../../images/burger-black.svg";
import iconBurgerWhite from "../../images/burger-white.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";


export default function Header(props) {
    const [isBurgerMenuOpen, setBurgerMenuOpened] = useState(false);

    function openBurgerMenu() {
        setBurgerMenuOpened(true);
    }

    function closeBurgerMenu() {
        setBurgerMenuOpened(false);
    }

    return(
        <section className={`header ${props.dark && 'header_dark'}`}>
            <div className="header__width">
                <Link to="/" className="header__logo"> </Link>
                <div className="header__buttons">
                    {props.isLoggenIn ? 
                    <>
                        <div className="header__nav">
                            <div>
                                <Link to="/movies" className="header__film-button">Фильмы</Link>
                                <Link to="/saved-movies" className="header__save-films-button">Сохранённые фильмы</Link>
                            </div>
                            <Link to="/profile" className="header__account-button">
                                <img src={props.dark ? iconAccountWhite : iconAccountBlack} className="header__icon-account" alt="Иконка аккаунта"></img>
                                <span>Аккаунт</span>
                            </Link>
                        </div>
                        <div className="header__burger-container">
                            <button onClick={openBurgerMenu} className="header__burger-button">
                                <img src={props.dark ? iconBurgerWhite : iconBurgerBlack} className="header__burger-icon" alt="Иконка меню"></img>
                            </button>
                            <div onClick={closeBurgerMenu} className={`header__background ${isBurgerMenuOpen && 'header__background_active'}`}></div>
                            <div className={`header__burger-menu ${isBurgerMenuOpen && 'header__burger-menu_active'}`}>
                                <button onClick={closeBurgerMenu} className="header__close-button"></button>
                                <div className="header__menu-nav">
                                    <div className="header__menu-links">
                                        <Link onClick={closeBurgerMenu} to="/" className="header__menu-link">Главная</Link>
                                        <Link onClick={closeBurgerMenu} to="/movies" className="header__menu-link">Фильмы</Link>
                                        <Link onClick={closeBurgerMenu} to="/saved-movies" className="header__menu-link">Сохранённые фильмы</Link>
                                    </div>
                                    <Link onClick={closeBurgerMenu} to="/profile" className="header__account-button header__account-button_black">
                                        <img src={iconAccountBlack} className="header__icon-account" alt="Иконка аккаунта"></img>
                                        <span>Аккаунт</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className="header__login-nav">
                        <Link to="/signup" className="header__signup-button">Регистрация</Link>
                        <Link to="/signin" className="header__signin-button">Войти</Link>
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}