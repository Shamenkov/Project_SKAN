import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './Header.css'
import { logout } from "../../redux/action/login";
import { accountInfo } from "../../redux/action/getAccountInfo";
import { useState } from "react";



const Header = () =>{
    const [isMobileActvie, setIsMobileActvie] = useState(false)
    const store = useSelector(state => state)
    const dispatch = useDispatch();

    const isAuth = localStorage.getItem('isAuth')
    const AccountInfoTake = localStorage.getItem('AccountInfoTake');
    const isLoading = localStorage.getItem('isLoading');
    const usedCompanyCount = useSelector(state =>state.accountInfo.usedCompanyCount)
    const companyLimit = useSelector(state =>state.accountInfo.companyLimit)

    const logoutFetch = () =>{
        dispatch(logout())
    }

    const burgerClick = () =>{
        setIsMobileActvie(!isMobileActvie)
        console.log(isMobileActvie)
    }

    useEffect(() =>{
        setTimeout(() => dispatch(accountInfo()),3000)
    },[isAuth])
    
    useEffect(() =>{
    },[isLoading])

    
    
    return(
        <div className={isMobileActvie ? "Header_containerGreen" : "Header_container"}>
            {isMobileActvie ? <Link className="HeaderMobile_mainLogoLink" to="/" onClick={burgerClick}>
                    <img src={require ('../images/MobileHeaderLogo.png')} alt='MenuPng'/>
            </Link>
            :
            <Link to="/" className="Header_mainLogoLink"><img src={require ("..//images//MainLogo.png")} alt="MainLogo" /></Link>
            }
                        
            <nav className="navigation">
                <Link to="/" >Главная</Link> 
                <Link to="/Price" >Тарифы</Link> 
                <Link to="/FAQ" >FAQ</Link>
            </nav>
            {AccountInfoTake && 
                <div className="clientTarifInfo">
                    <div>Использовано компаний <p className="UsedCompCount">{usedCompanyCount}</p></div>
                    <div className="LimitCompBlock">Лимит по компаниям <p className="LimitComp">{companyLimit}</p></div>
                 </div>}
            {isLoading ?
                <div className="Preloader">
                    <div className="loadingio-spinner-spinner-uftfniz7vpq"><div className="ldio-w8quksv06v">
                        <div>
                            </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                </div> : null}
            {isAuth ? 
            <div className="clientBlock">
                <div className="clientInfo">
                    <p className="clientName">Никита Ш.</p>
                    <Link to="/" className="clientButtonExit" onClick={logoutFetch}>Выйти</Link>
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
                <button className="Header_LoginButton"><Link to="/LoginPage" >Войти</Link></button>
            </div> 
            }
            {isMobileActvie ? <Link className="Header_MobButtonActive" to="/" onClick={burgerClick}>
                    <img src={require ('../images/HeaderExit.png')} alt='MenuPng'/>
            </Link>
            :
            <Link className="Header_MobButton" to="/mobileMain" onClick={burgerClick}>
                    <img src={require ('../images/HeaderMenu.png')} alt='MenuPng'/>
            </Link>
            }
            
        </div>
    )
}

export default Header;