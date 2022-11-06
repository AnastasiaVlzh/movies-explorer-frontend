import "./Register.css"
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo/logo.svg';
import React from 'react';

function Register({onRegister}) {

    const [registerData, setRegisterData] = React.useState({
        name: "",
        email: "",
        password: "",
      });

    const [message, setMessage] = React.useState('');

    const handleChange = (e) => {
        setMessage('');
        const { name, value } = e.target;
        setRegisterData({
          ...registerData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {    
        e.preventDefault();
        onRegister(registerData)
          .catch(err => setMessage(err.message || 'Что-то пошло не так'));
      };


    return (
        <div className="register">
            <Link to="/">
                <img className="header__logo_register" src={headerLogo} alt="Логотип страницы" />
            </Link>
            <p className="register__welcome">Добро пожаловать!</p>
            <form onSubmit={handleSubmit} className="register__form">
                <label for ="name" className="register__lable">Имя</label>
                <input className="register__input" id="name" name="name" type='text' value={registerData.name} onChange={handleChange} />
                <label for ="email" className="register__lable">E-mail</label>
                <input className="register__input" id='email' name="email" type='email' value={registerData.email} onChange={handleChange}/>
                <label for ="password" className="register__lable">Пароль</label>
                <input className="register__input" id="password" name="password" type="password" value={registerData.password} onChange={handleChange} />
                <button type="submit" className="link register__button" onSubmit={handleSubmit}>Зарегистрироваться</button>
          </form>
            <p className="register__signin">Уже зарегистрированы?<Link to="/signin" className="link register__login-link"> Войти</Link></p>
        </div>
    );
  }
  
  export default Register;