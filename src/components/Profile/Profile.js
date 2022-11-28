import "./Profile.css"
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="profile">
            <p className="profile__welcome">Привет, Анастасия!</p>
            <form className="profile__form">
                <label for ="name" className="profile__label">Имя</label>
                <input className="profile__input" id="name" name="name" type='text'  />
                <label for ="email" className="profile__label">E-mail</label>
                <input className="profile__input" id='email' name="email" type='email'/>
            </form>
            <p className="link profile__change">Редактировать</p>
            <p className="link profile__logout">Выйти из аккаунта</p>
        </div>
    );
  }
  
  export default Register;