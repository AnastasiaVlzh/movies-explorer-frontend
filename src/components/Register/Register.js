import "./Register.css"
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo/logo.svg';

function Register() {
    return (
        <div className="register">
            <Link to="/">
                <img className="header__logo_register" src={headerLogo} alt="Логотип страницы" />
            </Link>
            <p className="register__welcome">Добро пожаловать!</p>
            <form className="register__form">
                <label for ="name" className="register__lable">Имя</label>
                <input className="register__input" id="name" name="name" type='text' />
                <label for ="email" className="register__lable">E-mail</label>
                <input className="register__input" id='email' name="email" type='email'/>
                <label for ="password" className="register__lable">Пароль</label>
                <input className="register__input" id="password" name="password" type="password" />
                <button type="submit" className="link register__button">Зарегистрироваться</button>
          </form>
            <p className="register__signin">Уже зарегистрированы?<Link to="/signin" className="link register__login-link"> Войти</Link></p>
        </div>
    );
  }
  
  export default Register;