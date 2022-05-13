import avatar from '../../../images/avatar.jpg';

export default function AboutMe() {
    
    return(
        <section className="about-me">
            <div className="about-me__width">
                <h2 className="about-me__header">Студент</h2>
                <div className="about-me__info">
                    <div className='about-me__biography'>
                        <div className='about-me__resume'>
                            <h3 className='about-me__name'>Алексей Селяков</h3>
                            <span className='about-me__profession'>Фронтенд-разработчик, 28 лет</span>
                            <span className='about-me__history'>Я родился в п.Кадуй, живу в Санкт-Петербурге, закончил Политехнический колледж "Информатизации и управления". Я люблю слушать музыку и активно проводить время. Недавно начал кодить. Очень хочется попасть в сферу разработки.</span>
                        </div>
                        <div className='about-me__links'>
                            <a className='about-me__link' href=' '>Вконтакте</a>
                            <a className='about-me__link' href=' '>Instagram</a>
                        </div>
                    </div>
                    <img className='about-me__avatar' src={avatar} alt='Аватар'></img>
                </div>
            </div>
        </section>
    )
}