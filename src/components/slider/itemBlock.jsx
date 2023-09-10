import React from "react";

const ItemBlock = ({description, ImgSrc, customClass, number}) =>{
    return(
        <div className={customClass ? `ItemBlock ${number}` : ' ItemBlock'}>
            <img src={ImgSrc} alt='Picture' />
            <p className="itemBlockDescriptoin">{description}</p>
        </div>
    )
}

export default ItemBlock;