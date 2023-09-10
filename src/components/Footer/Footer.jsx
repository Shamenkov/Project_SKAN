import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
        <div className="Footer_container">
            <img src={require ("..//images//FooterLogo.png")} alt="MainLogo" />
            <div className="FooterText">
                <p>г. Москва, Цветной б-р, 40<br/>
                +7 495 771 21 11<br/>
                info@skan.ru
                </p>
                <p>Copyright. 2022</p>
            </div>
        </div>
    )
}

export default Footer;