import "../Register/Register.css"
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo/logo.svg';
import "./Login.css"
import React, { useState } from 'react';
import {useForm} from 'react-hook-form'

function Login({onLogin}) {
        const [loginData, setLoginData] = useState({
            email: "",
            password: "",
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setLoginData({
            ...loginData,
            [name]: value,
            });
        };

          const {
            register,
            formState:{
              errors,isValid,
            },
            handleSubmit,
  
        } = useForm({
            mode:'onBlur'
        })

    return (
        <div className="register">
            <Link to="/">
                <img className="header__logo_register" src={headerLogo} alt="Логотип страницы" />
            </Link>
            <p className="register__welcome">Рады видеть!</p>
            <form className="register__form" onSubmit={handleSubmit(onLogin)}>
                <label htmlFor ="email" className="register__lable">E-mail</label>
                <input className="register__input" id='email' name="email" type='email' value={loginData.email} {...register('email',{
                  required:"Обязательное поле",
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  onChange={handleChange} />
                  <span className="error">{errors?.email && <p className="error"> {errors?.email.message || "Поле не соответствует шаблону электронной почты"}</p>}</span>
                <label htmlFor ="password" className="register__lable">Пароль</label>
                <input className="register__input" id="password" name="password" type="password" value={loginData.password} {...register('password',{
                  required:"Обязательное поле",
                  })}
                onChange={handleChange} />
                <span className="error">{errors?.password && <p className="error error__second"> {errors?.password.message || "Обязательное поле"}</p>}</span>
                <button type="submit" className="link register__button" disabled={!isValid}>Войти</button>
          </form>
            <p className="register__signup">Еще не зарегистрированы?<Link to="/signup" className="link register__login-link"> Регистрация</Link></p>
        </div>
    );
  }
  
  export default Login;