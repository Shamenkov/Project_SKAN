import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './Header.css'
import { logout } from "../../redux/action/login";
import { accountInfo } from "../../redux/action/getAccountInfo";



const Header = () =>{
    const store = useSelector(state =>state)
    console.log(store)

    const dispatch = useDispatch();
    const isAuth = localStorage.getItem('isAuth')
    const AccountInfoTake = localStorage.getItem('AccountInfoTake');
    const usedCompanyCount = useSelector(state =>state.accountInfo.usedCompanyCount)
    const companyLimit = useSelector(state =>state.accountInfo.companyLimit)
    
    const delay = (ms) =>{
        return new Promise(r => setTimeout(() => r(), ms))
    }

    const logoutFetch = () =>{
        dispatch(logout())
    }

    useEffect(() =>{
        delay(3000).then(dispatch(accountInfo()))
    },[isAuth])

    return(
        <div className="Header_container">
            <img src={require ("..//images//MainLogo.png")} alt="MainLogo" />
            <nav className="navigation">
                <a>Главная</a>
                <a>Тарифы</a>
                <a>FAQ</a>
            </nav>
            {AccountInfoTake && 
                <div className="clientTarifInfo">
                    <div>Использовано компаний <p className="UsedCompCount">{usedCompanyCount}</p></div>
                    <div className="LimitCompBlock">Лимит по компаниям <p className="LimitComp">{companyLimit}</p></div>
                 </div>}
            {/* {isAuth ? 
                <div className="Preloader">
                    <div className="loadingio-spinner-spinner-uftfniz7vpq"><div className="ldio-w8quksv06v">
                        <div>
                            </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                </div>
            :
            null} */}
            {isAuth ? 
            <div className="clientBlock">
                <div className="clientInfo">
                    <p className="clientName">Никита Ш.</p>
                    <button className="clientButtonExit" onClick={logoutFetch}>Выйти</button>
                </div>
                <div className="clientAvatar" onClick={() => dispatch(accountInfo())}>
                    <img src={require('../images/avatar_person_user_icon_250196.png')}/>
                </div>
            </div>
            :
            <div className="buttonsContainer">
                <button>Зарегистрироваться</button>
                <svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.6" width="2" height="26" transform="matrix(-1 0 0 1 2 0)" fill="#029491"/>
                </svg>
                <button><Link to="/LoginPage">Войти</Link></button>
            </div> 
            }
            <button className="Header_MobButton">
                    <img src={require ('../images/HeaderMenu.png')} alt='MenuPng'/>
            </button>
        </div>
    )
}

export default Header;