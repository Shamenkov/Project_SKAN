import React from "react";
import Slider from "../slider/slider";
import './rateBlock.css'

const RateBlock = ({RateBlockHeader, title, titleDescription, img, price, oldPrice, priceDescription, RateDescriptionList1, RateDescriptionList2, RateDescriptionList3, buttonTitle, isActive}) =>{
    return(
        <div className={isActive ?"RateBlockBox_active" :"RateBlockBox"}>
            <div className={RateBlockHeader}>
                <div className="RateBlockTitle">
                    <h3>{title}</h3>
                    <p>{titleDescription}</p>
                </div>
                <img src={img}></img>
            </div>
            <div className="RateBlockDescription">
                <div className="priseBlock">
                    <p>{price}</p>
                    <p>{oldPrice}</p>
                </div>
                <p className="priceDescription">{priceDescription}</p>
                <p className="RateListTitle">В тариф входит:</p>
                    <ul className="RateList">
                        <li>{RateDescriptionList1}</li>
                        <li>{RateDescriptionList2}</li>
                        <li>{RateDescriptionList3}</li>
                    </ul>
            </div>
            <button className="rateBlockButton">{buttonTitle}</button>
        </div>
    )
}

export default RateBlock;