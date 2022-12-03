import "./Profile.css"
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import {useForm} from 'react-hook-form'

function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');

    const [email, setEmail] = React.useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     props.onSubmit({
    //       name,
    //       email,
    //     });
    //   }

      React.useEffect(() => {
        if (currentUser) {
        setName(currentUser.name);
        setEmail(currentUser.email);
        }
    }, [currentUser]);

        const {
            register,
            formState:{
            errors,isValid,
            },
            handleSubmit

        } = useForm({
            mode:"onBlur"
        })

        //написать валидатор и добавить в useForm, посмотреть как свой валидатор добавить
        // то же что в логин + сравнить предыдущее значение с текущим

    return (
        <div className="profile">
            <p className="profile__welcome">Привет, {name} !</p>
            <form className="profile__form" onSubmit={handleSubmit(props.onSubmit)}>
                <label htmlFor ="name" className="profile__label">Имя</label>
                <input className="profile__input" id="name" name="name" type='text' value={name} {...register('name',{
                  required:"Обязательное поле",
                  pattern: /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u,
                  })} 
                  onChange={handleNameChange}  /> 
                <span className="error">{errors?.name && <p className="error error__profile-name"> {errors?.name.message || "Поле может содержать только латиницу, кириллицу, пробел или дефис"}</p>}</span>
                <label htmlFor ="email" className="profile__label">E-mail</label>
                <input className="profile__input" id='email' name="email" type='email' value={email} {...register('email',{
                  required:"Обязательное поле",
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                onChange={handleEmailChange}/>
                <span className="error">{errors?.email && <p className="error error__profile"> {errors?.email.message || "Поле не соответствует шаблону электронной почты"}</p>}</span>
                <button className="link profile__change" type="submit" disabled={!isValid}>Редактировать</button>
                <p className="link profile__logout" onClick={props.onLogout}>Выйти из аккаунта</p>
            </form>

        </div>
    );
  }
  
  export default Profile;