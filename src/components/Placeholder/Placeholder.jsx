import React, { useEffect } from "react";
import {useState} from "react";
import './Placeholder.css'
import { useDispatch, useSelector } from "react-redux";
import { login} from "../../redux/action/login";

const Form = () =>{
    const [emailInputValue, setEmailInputValue] = useState('');
    const [emailDirty, setEmailDirty] = useState('');
    const [emailNotEmpty, setEmailNotEmpty] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)

    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [passwordDirty, setPasswordDirty] = useState('');
    const [passwordNotEmpty, setPasswordNotEmpty] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)


    const [valueNotEmpty, setValueNotEmpty] = useState(false)
    const dispatch = useDispatch();

    const isAuth  = useSelector(state => state.login.isAuth)


    const validatePasswordNotEmpty = (value) => {
        if (!value.length) {
            setPasswordDirty('Обязательное поле!');
            setPasswordNotEmpty(false);
            setErrorPassword(true);
        } else {            
            setPasswordDirty('');
            setPasswordNotEmpty(true);    
            setErrorPassword(false);     
            }
        }

        const validateEmailNotEmpty = (value) => {
            if (!value.length) {
                setEmailDirty('Обязательное поле!');
                setEmailNotEmpty(false);
                setErrorEmail(true)
             }else {
                setEmailDirty('');
                setEmailNotEmpty(true);   
                setErrorEmail(false);        
                }
            }

    // const validateEmail = (e) => {
    //     setEmailInputValue(e.target.value)
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if(!re.test(String(e.target.value))){
    //         setEmailDirty("Введите корректное значение!")
    //         setEmailNotEmpty(false)
    //     }else{
    //         setEmailDirty('')
    //     }
    // }

    const loginFetch = () =>{
        dispatch(login(emailInputValue, passwordInputValue))
    }

    useEffect(() =>{
    },[isAuth])

    useEffect(() =>{
        if(emailNotEmpty !== true || passwordNotEmpty !== true){
            setValueNotEmpty(false)
            console.log('false')
        }else{
            setValueNotEmpty(true)
            console.log('true')
        }
    },[passwordNotEmpty, emailNotEmpty, valueNotEmpty])
    
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
                        <input 
                        className={errorEmail ? 'errorEmailInput' : 'EmailInput'}
                        value={emailInputValue} 
                        type='text' 
                        onChange={(e) => setEmailInputValue(e.target.value)} 
                        onBlur={()=> validateEmailNotEmpty(emailInputValue)}></input>
                        <span style={{color:'red', textAlign:"center"}}>{emailDirty}</span>
                    </label>
                    <label>
                        <p>Пароль:</p>
                        <input 
                        className={errorPassword ? 'errorPasswordInput' : 'passwordInput'}
                        value={passwordInputValue} 
                        onBlur={()=>validatePasswordNotEmpty(passwordInputValue)} 
                        type='password' 
                        onChange={(e) => setPasswordInputValue(e.target.value)}></input>
                        <span style={{color:'red', textAlign:"center"}}>{passwordDirty}</span>
                    </label>
                </div>
               {valueNotEmpty ? <button className="Submit_button" onClick={loginFetch}>Войти</button> : <button className="Submit_buttonDisabled" disabled onClick={loginFetch}>Войти</button>}
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

export default Form;