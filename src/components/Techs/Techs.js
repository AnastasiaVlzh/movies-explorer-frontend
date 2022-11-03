import './Techs.css'

function Techs() {
  return (
    <div className="techs">
        <h2 id='Techs' className="techs__title">Технологии</h2>
        <h3 className="techs__discription">7 технологий</h3>
        <p className="techs__discription_text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p> 
        <nav className="techs__nav">
                <li className="techs__link">HTML</li>
                <li className="techs__link">CSS</li>
                <li className="techs__link">JS</li>
                <li className="techs__link">React</li>
                <li className="techs__link">Git</li>
                <li className="techs__link">Express.js</li>
                <li className="techs__link">mongoDB</li>
        </nav>
    </div>

  );
}

export default Techs;