import "./Profile.css"
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import {useForm} from 'react-hook-form'

function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);
    const [isActiveButton, setActiveButton] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [message, setMessage] = React.useState('');


    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    function handleNameChange(e) {
        const value = e.target.value;
        setName(value);

        if (value !== props.currentName) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    }

    function handleEmailChange(e) {
        const value = e.target.value;
        setEmail(value);

        if (value !== props.currentEmail) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }

        if (!isValidEmail(e.target.value)) {
            setError('Поле не соответствует шаблону электронной почты');
          } else {
            setError(null);
          }
          setMessage(e.target.value);
    }
    
    function onSubmit(evt) {
        evt.preventDefault();
        props.onCorrect({
          name: name,
          email: email
        });
      }

      React.useEffect(() => {
        if (currentUser) {
        setName(currentUser.name);
        setEmail(currentUser.email);
        }
    }, [currentUser]);


    React.useEffect(() => {
        setActiveButton(!(currentUser.name === props.currentName || currentUser.email === props.currentEmail))
    }, [currentUser, props.currentName, props.currentEmail]);


    return (
        <div className="profile">
            <p className="profile__welcome">Привет, {name} !</p>
            <form className="profile__form" onSubmit={onSubmit}>
                <label htmlFor ="name" className="profile__label">Имя</label>
                <input className="profile__input" 
                name="name" 
                type='text'
                value={name}
                onChange={handleNameChange} 
                /> 
                <label htmlFor ="email" className="profile__label">E-mail</label>
                <input className="profile__input"
                name="email" 
                type='email'
                value={email} 
                onChange={handleEmailChange}
                />
                {error && <h2 className="error error__profile">{error}</h2>}
                <button className="link profile__change" type="submit" disabled={!isActiveButton}>Редактировать</button>
                <p className="link profile__logout" onClick={props.onLogout}>Выйти из аккаунта</p>
            </form>

        </div>
    );
  }
  
  export default Profile;