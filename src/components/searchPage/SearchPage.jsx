import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import './SearchPage.css'

const SearchPage = () =>{
    

    return(
        <div className='Search_Page'>
            <div className="SearchPage_container">
            <div className="SearchPage_section1">
                <h1>Найдите необходимые данные в пару кликов.</h1>
                <p className="SearchPage_description">Задайте параметры поиска.<br/> Чем больше заполните, тем точнее поиск</p>
                <div className="SearchPage_form">
                <SearchForm />
                </div>
            </div>
            <div className="SearchPage_section2">
                <div className="imagesContainer">
                    <img src={require('../images/SearchDocument.png')}/>
                    <img src={require('../images/SearchFolders.png')}/>
                </div>
                <img src={require('../images/Search_mainPic.png')} className='Search_mainPic'/>
            </div>
        </div>
    </div>        
    )
}

export default SearchPage;