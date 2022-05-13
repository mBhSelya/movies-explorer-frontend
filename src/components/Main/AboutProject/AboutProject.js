export default function AboutProject() {
    
    return(
        <section className="project">
            <h2 className="project__header">О проекте</h2>
            <div className="project__paragraphs">
                <div className="project__paragraph">
                    <h3 className="project__paragraph-name">Дипломный проект включал 5 этапов</h3>
                    <span className="project__paragraph-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</span>
                </div>
                <div className="project__paragraph">
                    <h3 className="project__paragraph-name">На выполнение диплома ушло 5 недель</h3>
                    <span className="project__paragraph-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</span>
                </div>
            </div>
            <div className="project__scale">
                <article className="project__scale-left">
                    <span className="project__scale-designation">1 неделя</span>
                    <span className="project__scale-designation-caption">Back-end</span>
                </article>
                <article className="project__scale-right">
                    <span className="project__scale-designation project__scale-designation_right">4 недели</span>
                    <span className="project__scale-designation-caption">Front-end</span>
                </article>
            </div>
        </section>
    )
}