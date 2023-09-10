import React from "react";
import Placeholder from "../Placeholder/Placeholder.jsx";
import './LoginPage.css'

const LoginPage = () =>{
    return(
        <div className='Login'>
            <div className="LoginPage_container">
                <div className="LoginPage_description">
                    <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                    <img src={require('../images/LoginDescriptionImg.png')} className='LoginImg_desktop'/>
                </div>
                <div className="LoginPage_placeholder">
                    <Placeholder />
                </div>
                <img src={require('../images/LoginDescriptionImg.png')} className='LoginImg_forMobile'/>
            </div>
        </div>
    )
}

export default LoginPage;