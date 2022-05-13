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
                        <span className="profile__count">Имя</span>
                        <span className="profile__user-data">Виталий</span>
                    </div>
                    <div className="profile__line">
                        <span className="profile__count">E-mail</span>
                        <span className="profile__user-data">pochta@yandex.ru</span>
                    </div>
                </div>
                <button className="profile__button">Редактировать</button>
                <button className="profile__button">Выйти из аккаунта</button>
            </section>
        </>
    )
}