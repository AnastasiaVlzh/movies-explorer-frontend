import './Promo.css'

function Promo() {
  return (
    <div className="promo">
        <div className="promo__discription">
           <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1> 
           <nav className="promo__nav">
                <a href="#aboutProject" className="link promo__link">О проекте</a>
                <a href="#Techs" className="link promo__link">Технологии</a>
                <a  href="#aboutMe" className="link promo__link">Студент</a>
            </nav>
        </div>
    </div>

  );
}

export default Promo;