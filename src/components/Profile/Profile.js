import Header from "../Header/Header";

export default function Profile() {
    
    return(
        <>
            <Header
                dark={false}
                isLoggenIn={true}
            />
            <section className="profile">
                <h2 className="profile__greeting">Привет, Виталий</h2>
                <div className="profile__counts">
                    <div className="profile__line">
                        <label className="profile__count" for="username">Имя</label>
                        <input className="profile__user-data"
                            id="username"
                            type="text"
                            value={'Виталий'}
                            placeholder="Имя"
                            minLength="1"
                            maxLength="30"
                            disabled>
                        </input>
                    </div>
                    <div className="profile__line">
                        <label className="profile__count" for="email">E-mail</label>
                        <input className="profile__user-data"
                            id="email"
                            type="email"
                            value={'pochta@yandex.ru'}
                            placeholder="E-mail"
                            minLength="1"
                            maxLength="30"
                            disabled>
                        </input>
                    </div>
                </div>
                <button className="profile__button">Редактировать</button>
                <button className="profile__button">Выйти из аккаунта</button>
            </section>
        </>
    )
}