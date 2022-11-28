import './AboutProject.css'

function AboutProject() {
  return (
    <div className="aboutProject">
        <h2 id='aboutProject' className="aboutProject__title">О проекте</h2>
        <div className="aboutProject__period">
          <div className="aboutProject__discription">
            <h3 className="aboutProject__discription_main-text">Дипломный проект включал 5 этапов</h3>
            <p className="aboutProject__discription_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="aboutProject__discription">
            <h3 className="aboutProject__discription_main-text">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutProject__discription_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>

        <div className="aboutProject__timeline">
          <div className="aboutProject__timeline_block">
            <p className="aboutProject__timeline_text">1 неделя</p>
          </div>
          <div className="aboutProject__timeline_block aboutProject__timeline_block_gray">
            <p className="aboutProject__timeline_text aboutProject__timeline_text_black ">4 недели</p>
          </div>
        </div>
        <div className="aboutProject__timeline aboutProject__timeline_transparent">
          <div className="aboutProject__timeline_block aboutProject__timeline_block_transparent">
            <p className="aboutProject__timeline_text aboutProject__timeline_text_grey">Back-end</p>
          </div>
          <div className="aboutProject__timeline_block aboutProject__timeline_block_gray aboutProject__timeline_block_transparent">
            <p className="aboutProject__timeline_text aboutProject__timeline_text_grey ">Front-end</p>
          </div>
        </div>
      </div>

  );
}

export default AboutProject;