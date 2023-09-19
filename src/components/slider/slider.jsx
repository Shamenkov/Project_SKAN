import React, { useEffect, useState } from "react";
import ItemBlock from "./itemBlock";
import Slider from "react-slick";

import './slider.css'
import "./slick-theme.css";

const PrevArrow = ({ onClick } ) =>{
    return(
        
        <button className='sliderButton_left' onClick={onClick}><img src={require ("..//images//icons8-шеврон-вправо-90 1.png")} /></button> 
    )
}

const NextArrow = ({ onClick }) =>{
    return(
        <button className='sliderButton_right' onClick={onClick}><img src={require ("..//images//icons8-шеврон-вправо-90 2.png")} /></button>
    )
}



const SliderComponent = () =>{
    const [settings, setSettings] = useState({
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
      })
    
    const mobileM = window.innerWidth <= 325;
    const mobileL = window.innerWidth <= 424;
    const Pud = window.innerWidth <= 768.98;
    const Note1200 = window.innerWidth <= 1100;
    
    useEffect(() =>{
        if(mobileM || mobileL || Pud){
            setSettings ({
                arrows: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: <PrevArrow />,
                nextArrow: <NextArrow />
              })
        }else if(Note1200){
            setSettings ({
                arrows: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow: <PrevArrow />,
                nextArrow: <NextArrow />
              })
        }else{
            setSettings ({
                arrows: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: <PrevArrow />,
                nextArrow: <NextArrow />
              })
        }
    },[])
    
    return(
        <Slider {...settings}>
            
        <ItemBlock
            customClass={'ItemBlock'}
            number={'1'}
            ImgSrc={require ("..//images//clock.png")}
            description={"Высокая и оперативная скорость обработки заявки"}
        />

        <ItemBlock 
            customClass={'ItemBlock'}
            number={'2'}
            ImgSrc={require ("..//images//Find.png")}
            description={"Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"}
        />

        <ItemBlock 
            customClass={'ItemBlock'}
            number={'3'}
            ImgSrc={require ("..//images//shield.png")}
            description={"Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"}
        />

        <ItemBlock
            customClass={'ItemBlock'}
            number={'1'}
            ImgSrc={require ("..//images//clock.png")}
            description={"Высокая и оперативная скорость обработки заявки"}
        />

        <ItemBlock 
            customClass={'ItemBlock'}
            number={'2'}
            ImgSrc={require ("..//images//Find.png")}
            description={"Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"}
        />

        <ItemBlock 
            customClass={'ItemBlock'}
            number={'3'}
            ImgSrc={require ("..//images//shield.png")}
            description={"Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"}
        />
        </Slider>        
    )
    
}

export default SliderComponent;