import "./Register.css"
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo/logo.svg';
import React from 'react';
import {useForm} from 'react-hook-form'

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

      // const handleSubmit = (e) => {    
      //   e.preventDefault();
      //   onRegister(registerData)
      //     .catch(err => setMessage(err.message || 'Что-то пошло не так'));
      // };

      const {
          register,
          formState:{
            errors,isValid,
          },
          handleSubmit,

      } = useForm({
        mode:"onBlur"
      })

    return (
        <div className="register">
            <Link to="/">
                <img className="header__logo_register" src={headerLogo} alt="Логотип страницы" />
            </Link>
            <p className="register__welcome">Добро пожаловать!</p>
            <form onSubmit={handleSubmit(onRegister)} className="register__form">
                <label htmlFor ="name" className="register__lable">Имя</label>
                <input className="register__input" id="name" name="name" type='text' value={registerData.name}  {...register('name',{
                  required:"Обязательное поле",
                  pattern: /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u,
                  })} 
                  onChange={handleChange}  />
                <span className="error">{errors?.name && <p className="error"> {errors?.name.message || "Поле может содержать только латиницу, кириллицу, пробел или дефис"}</p>}</span>
                <label htmlFor ="email" className="register__lable">E-mail</label>
                <input className="register__input" id='email' name="email" type='email' value={registerData.email} {...register('email',{
                  required:"Обязательное поле",
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  onChange={handleChange} />
                  <span className="error">{errors?.email && <p className="error error__second"> {errors?.email.message || "Поле не соответствует шаблону электронной почты"}</p>}</span>
                <label htmlFor ="password" className="register__lable">Пароль</label>
                <input className="register__input" id="password" name="password" type="password" value={registerData.password} {...register('password',{
                  required:"Обязательное поле",
                  })}
                onChange={handleChange}  />
                <button type="submit" className="link register__button" onSubmit={handleSubmit} disabled={!isValid}>Зарегистрироваться</button>
          </form>
            <p className="register__signin">Уже зарегистрированы?<Link to="/signin" className="link register__login-link"> Войти</Link></p>
        </div>
    );
  }
  
  export default Register;