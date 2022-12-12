import "./Register.css"
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo/logo.svg';
import React from 'react';
import {useForm} from 'react-hook-form'

function Register({onRegister}) {

      const {
          register,getValues,
          formState:{
            errors,isValid,
          },
          handleSubmit,

      } = useForm({
        mode:"all"
      })

    return (
        <div className="register">
            <Link to="/">
                <img className="header__logo_register" src={headerLogo} alt="Логотип страницы" />
            </Link>
            <p className="register__welcome">Добро пожаловать!</p>
            <form onSubmit={handleSubmit(onRegister)} className="register__form">
                <label htmlFor ="name" className="register__lable">Имя</label>
                <input className="register__input" id="name" name="name" type='text' {...register('name',{
                  required:"Обязательное поле",
                  pattern: /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u,
                  })} 
                  />
                <span className="error">{errors?.name && <p className="error"> {errors?.name.message || "Поле может содержать только латиницу, кириллицу, пробел или дефис"}</p>}</span>
                <label htmlFor ="email" className="register__lable">E-mail</label>
                <input className="register__input" id='email' name="email" type='email' {...register('email',{
                  required:"Обязательное поле",
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  />
                  <span className="error">{errors?.email && <p className="error error__second"> {errors?.email.message || "Поле не соответствует шаблону электронной почты"}</p>}</span>
                <label htmlFor ="password" className="register__lable">Пароль</label>
                <input className="register__input" id="password" name="password" type="password" {...register('password',{
                  required:"Обязательное поле",
                  })}
                />
                <button type="submit" className="link register__button" onSubmit={handleSubmit} disabled={!isValid}
                onClick={() => {
                  const values = getValues(['name','email','password']);
                }}
                >Зарегистрироваться</button>
          </form>
            <p className="register__signin">Уже зарегистрированы?<Link to="/signin" className="link register__login-link"> Войти</Link></p>
        </div>
    );
  }
  
  export default Register;