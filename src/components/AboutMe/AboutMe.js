import './AboutMe.css'
import myPhoto from '../../images/IMG_5406.JPG'

function AboutMe() {
  return (
    <div className="aboutMe">
      <h2 id='aboutMe' className="aboutMe__title">Студент</h2>
            <div className="aboutMe__portfolio">
                <div className="aboutMe__info">
                    <h3 className="aboutMe__name">Анастасия</h3>
                    <p className="aboutMe__education">Фронтенд-разработчик</p> 
                    <p className="aboutMe__discription">Я родилась и живу в Москве, закончила ГУУ по специальности "Антикризисное управление". Сейчас работаю в крупном банке на позиции Product owner. Год назад решила пойти учиться в ЯП на курсы по Web-разработке, чтобы более детально вникнуть и понять задачи разработчиков. Полученные знания уже сейчас помогают мне в работе. А еще я люблю спорт и творчество, с детства профессионально занималась спортивными-бальными танцами.</p>
                    <a className="link aboutMe__github" href='https://github.com/AnastasiaVlzh'>Github</a>
                </div>
                <img className="aboutMe_photo" alt="мое фото" src={myPhoto} />
            </div>
        </div>

  );
}

export default AboutMe;