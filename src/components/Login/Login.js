import "../Register/Register.css"
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo/logo.svg';
import "./Login.css"

function Login() {
    return (
        <div className="register">
            <Link to="/">
                <img className="header__logo_register" src={headerLogo} alt="Логотип страницы" />
            </Link>
            <p className="register__welcome">Рады видеть!</p>
            <form className="register__form">
                <label for ="email" className="register__lable">E-mail</label>
                <input className="register__input" id='email' name="email" type='email'/>
                <label for ="password" className="register__lable">Пароль</label>
                <input className="register__input" id="password" name="password" type="password" />
                <button type="submit" className="link register__button">Войти</button>
          </form>
            <p className="register__signup">Еще не зарегистрированы?<Link to="/signup" className="link register__login-link"> Регистрация</Link></p>
        </div>
    );
  }
  
  export default Login;