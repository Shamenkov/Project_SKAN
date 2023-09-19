import React from "react";
import { Link } from "react-router-dom";
import Placeholder from "../Placeholder/Placeholder.jsx";
import './mobileMain.css'

const MobileMain = () =>{
    return(
        <div className='MobileMain'>
            <div className="MobileMain_container">
                <nav className="MobileMain_navigation">
                    <Link to="/" >Главная</Link> 
                    <Link to="/Price" >Тарифы</Link> 
                    <Link to="/FAQ" >FAQ</Link>
                </nav>
                <div className="MobileMain_buttonContainer">
                    <button>Зарегистрироваться</button>
                    <Link to="/LoginPage" className="MobileMain_LoginButton">Войти</Link>
                </div>
            </div>
        </div>
    )
}

export default MobileMain;