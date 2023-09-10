import React from "react";
import {useState} from "react";
import './Placeholder.css'
import { useDispatch } from "react-redux";
import { login} from "../../redux/action/login";
import { Link } from "react-router-dom";

const Placeholder = () =>{
    
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const dispatch = useDispatch();

    const loginFetch = () =>{
        dispatch(login(emailInputValue, passwordInputValue))
    }
    
    

    return(
        <div className="Placeholder_container">
            <img src={require('../images/PlaceholderPic.png')} className='Placeholder_lock'/>
            <div className="Placeholder_content">
                <div className="section1">
                <div className="Placeholder_buttons">
                    <button className="enter_Button">Войти</button>
                    <button className="registration_Button">Зарегистрировать</button>
                </div>
                <div className="Placeholder_inputs">
                    <label>
                        <p>Логин или номер телефона:</p>
                        <input type='text' onChange={(e) => setEmailInputValue(e.target.value)}></input>
                    </label>
                    <label>
                        <p>Пароль:</p>
                        <input type='password' onChange={(e) => setPasswordInputValue(e.target.value)}></input>
                    </label>
                </div>
                {/* <button  ></button> */}
                <Link to="/" className="Submit_button" onClick={loginFetch}>Войти</Link>
                <a className='EmptyLink' href="#password">Востановить пароль</a>
                <p className="TitleForLogWith">Войти через:</p>
                <div className="Placeholder_loginWith">
                    <button className="google_Button">
                        <img src={require('../images/google.png')} alt='google' />
                    </button>
                    <button className="facebook_Button">
                        <img src={require('../images/facebook.png')} alt='facebook'/>
                    </button>
                    <button className="Yandex_Button">
                        <img src={require('../images/Yandex.png')} alt='Yandex'/>
                    </button>
                </div>
                </div>
            </div>
            <div className="LoginPage_placeholder"></div>
        </div>
    )
}

export default Placeholder;