import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RateBlock from "../rateBlocks/rateBlock";
import SliderComponent from "../slider/slider";
import './Main.css'


const Main = () =>{
    const store = useSelector(state=>state)
    
    const isAuth = localStorage.getItem('isAuth')
    useEffect(() =>{
    },[isAuth])

    return(
        <div className='Main'>
            <div className="mainSection_1">
                <div className="description">
                    <h1 className="descripton_h1">сервис по поиску публикаций о компании по его ИНН</h1>
                    <p>Комплексный анализ публикаций, получение данных<br /> в формате PDF на электронную почту.</p>
                    {isAuth ? <Link to="/Search_Page" className="descriptoin_button">Запросить данные</Link> : null}
                </div>                
                <img src={require ("..//images//description pic.png")} alt="Изображение 1" className="picture"/>                
            </div>
            <div className="mainSection_2">
                <h1>Почему именно мы</h1>
                <SliderComponent />
                <img src={require ("..//images//Group 14.png")} alt="Изображение 2" className="bigPictureSection_2"/>
            </div>
            <div className="mainSection_3">
                <h1>наши тарифы</h1>
                <div className="RateBlocksContainer">
                    {isAuth ? <RateBlock 
                    isActive={isAuth}
                    RateBlockHeader={'BeginnerBlock'}
                    title={'Beginner'} 
                    titleDescription={'Для небольшого исследования'} 
                    img = {require ('..//images//BeginnerLight.png')}
                    price={'799 ₽'} 
                    oldPrice={'1 200 ₽'}
                    priceDescription={'или 150 ₽/мес. при рассрочке на 24 мес.'} 
                    RateDescriptionList1={'Безлимитная история запросов'} 
                    RateDescriptionList2={'Безопасная сделка'} 
                    RateDescriptionList3={'Поддержка 24/7'} 
                    buttonTitle={'Перейти в личный кабинет'}/> 
                    :
                    <RateBlock 
                    RateBlockHeader={'BeginnerBlock'}
                    title={'Beginner'} 
                    titleDescription={'Для небольшого исследования'} 
                    img = {require ('..//images//BeginnerLight.png')}
                    price={'799 ₽'} 
                    oldPrice={'1 200 ₽'}
                    priceDescription={'или 150 ₽/мес. при рассрочке на 24 мес.'} 
                    RateDescriptionList1={'Безлимитная история запросов'} 
                    RateDescriptionList2={'Безопасная сделка'} 
                    RateDescriptionList3={'Поддержка 24/7'} 
                    buttonTitle={'Подробнее'}/>
                    }
                    
                    <RateBlock 
                    RateBlockHeader={'ProBlock'}
                    title={'Pro'} 
                    titleDescription={'Для HR и фрилансеров'} 
                    img = { require ('..//images//ProArrow.png')}
                    price={'1 299 ₽'} 
                    oldPrice={'2 600 ₽'}
                    priceDescription={'или 279 ₽/мес. при рассрочке на 24 мес.'} 
                    RateDescriptionList1={'Все пункты тарифа Beginner'} 
                    RateDescriptionList2={'Экспорт истории'} 
                    RateDescriptionList3={'Рекомендации по приоритетам'} 
                    buttonTitle={'Подробнее'}/>
                    <RateBlock 
                    RateBlockHeader={'BusinessBlock'}
                    title={'Business'} 
                    titleDescription={'Для корпоративных клиентов'} 
                    img = { require ('..//images//BusinessLapTop.png')}
                    price={'2 379 ₽'} 
                    oldPrice={'3 700 ₽'}
                    priceDescription={'или 279 ₽/мес. при рассрочке на 24 мес.'} 
                    RateDescriptionList1={'Все пункты тарифа Pro'} 
                    RateDescriptionList2={'Безлимитное количество запросов'} 
                    RateDescriptionList3={'Приоритетная поддержка'} 
                    buttonTitle={'Подробнее'}/>
            </div>                
            </div>
        </div>
    )
}

export default Main;