import { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import { UserContext } from "../../context/CurrentUserContext";
import validator from 'validator';

export default function Profile(props) {
    const userData = useContext(UserContext);
    const [changedData, setChangedData] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [textError, setTextError] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    function handleInputName(event) {
        setName(event.target.value);
        props.handleChange(event);
    }

    function handleInputEmail(event) {
        setEmail(event.target.value);
        props.handleChange(event);
    }

    function handleIsEdit() {
        hideEditButton();
        props.resetForm();
    }

    function hideEditButton() {
        setIsEdit(!isEdit)
    }

    useEffect(() => {
        setName(userData.name);
        setEmail(userData.email);
    }, [userData]);

    useEffect(() => {
        if (email) {
            if (name === userData.name && email === userData.email) {
                setChangedData(true);
            } else if (!props.isValid) {
                setChangedData(true);
            } else if (!validator.isEmail(email)) {
                setErrorEmail('Некорректный Email');
                setChangedData(true);
            } else {
                setErrorEmail('');
                setChangedData(false);
            }
        }
    }, [name, email, userData, props.isValid])

    function handleSaveDataUser(event) {
        event.preventDefault()
        setTimeout(() => {setTextError('')}, 4000);
        props.editUser(name, email, hideEditButton, setTextError);
    }
    
    return(
        <>
            <Header 
                dark={false}
                isLoggenIn={true}
            />
            <form onSubmit={handleSaveDataUser} className="profile">
                <h2 className="profile__greeting">{`Привет, ${userData.name}`}</h2>
                <div className="profile__counts">
                    <div className="profile__line">
                        <div className="profile__input-and-label">
                            <label className="profile__count" htmlFor="username">Имя</label>
                            <input className="profile__user-data"
                                onChange={handleInputName}
                                id="username"
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Имя"
                                minLength="2"
                                maxLength="30"
                                disabled={!isEdit}>
                            </input>
                        </div>
                        <span className="profile__error profile__error_name">{props.errors.name}</span>
                    </div>
                    <div className="profile__line">
                        <div className="profile__input-and-label">
                            <label className="profile__count" htmlFor="email">E-mail</label>
                            <input className="profile__user-data"
                                onChange={handleInputEmail}
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                placeholder="E-mail"
                                disabled={!isEdit}>
                            </input>
                        </div>
                        <span className="profile__error profile__error_email">{props.errors.email || errorEmail}</span>
                    </div>
                    <span className="profile__error profile__error_submit">{textError}</span>
                </div>
                <button type="submit" onClick={handleSaveDataUser} className={`profile__save-button ${isEdit && 'profile__save-button_active'} ${changedData && 'profile__save-button_disabled'}`} disabled={changedData}>Сохранить</button>
                <button type="button" onClick={handleIsEdit} className={`profile__cancel ${isEdit && 'profile__cancel_active'}`}>Отмена</button>
                <button type="button" onClick={handleIsEdit} className={`profile__button ${!isEdit && 'profile__button_active'}`}>Редактировать</button>
                <button onClick={props.logOut} className={`profile__button ${!isEdit && 'profile__button_active'}`}>Выйти из аккаунта</button>
            </form>
        </>
    )
}