import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {documents} from "../../redux/action/documents";
import './ResultPage.css'

const ResultPage = () =>{
    //useSelector
    const store = useSelector(state => state)
    const docsData = useSelector(state => state.documentsReduce.items)
    const data = useSelector(state => state.histogramsReduce.data)
    const idsDataArray = useSelector(state => state.objectSearchReduce.items)
    //properties
    const sliderContainer = useRef(null)
    const dispatch = useDispatch()
    let position = 0
    const idsArray = idsDataArray.map(item => item.encodedId)
    const checkMobilePlatform = window.innerWidth <= 767.98;
    //useState
    const [prev,setPrev] = useState(false)
    const [next,setNext] = useState(false)
    const [docList, setDocList] = useState([])
    const [docCount, setDocCount] = useState(0)
    const [riskFactors,setRiskFactors] = useState([])
    const [publicationDocCount, setPublicationDocCount] = useState(10)
    const [isPagination,setIsPagination] = useState(false)
    //Logic
    function changeDate(inputDate) {
		const parts = inputDate.split('T');

		const datePart = parts[0];
		const [year, month, day] = datePart.split('-');

		const changedDate = `${day}.${month}.${year}`;

		return changedDate;
	}

    function removeHtmlTags(text) {
		return text.replace(/<[^>]*>/g, '');
	}
   
    const prevSlide = () =>{
        if (position === 0){
            setPrev(true)
        }else {
            setPrev(false)
            position +=300
            sliderContainer.current.childNodes.forEach(element => {
                element.style = `transform: translateX(${position}px)`
            });
        }
    }

    const nextSlide = () =>{
        if (position <= -(docList.length - 10) * 145 + 100){
            setNext(true)
            setPrev(false)
        }else {
            setNext(false)
            setPrev(false)
            position -=300
            sliderContainer.current.childNodes.forEach(element => {
                element.style = `transform: translateX(${position}px)`
            });
        }
    }


    const paginationHendler =() =>{
        setPublicationDocCount(publicationDocCount+10)
        setIsPagination(!isPagination)
    }

    //Fetch
    const fetchDocs = () =>{
        const data = {
            ids : idsArray.splice(0,publicationDocCount)
        }
        dispatch(documents(data))
    }

    //useEffect
    useEffect(() =>{
    },[isPagination])
    
    useEffect(()=>{
        setTimeout(() => console.log(data),3000)
        // setTimeout(() => fetchDocs(),3000)
        setTimeout(() => setDocList(data[0].data),3000)
        // setTimeout(() => setDocCount(data[0].data.length),3000)
        setTimeout(() => setRiskFactors(data[1].data),3000)
    },[])
     
    return(
        <div className='Result'>
            <div className="ResultPage_container">
            <div className="ResultPage_section1">
                <div className="ResultPage_title">
                    <h1>Ищем. Скоро будут результаты</h1>
                    <p>Поиск может занять некоторое время, просим сохранять терпение.</p>
                </div>
                <div className='ResultPage_pic'>
                    <img src={require('../images/ResultPage_img.png')}/>
                </div>
            </div>
            <div className="ResultPage_section2">
                <h2>Общая сводка</h2>
                <p>Найдено {docCount} вариантов</p>
                <div className="Result_Summary">
                <button onClick={prevSlide}>
                    <img src={require('../images/icons8-шеврон-вправо-90 1.png')}/>
                </button>
                <div className="Result_BoardList">
                    <ul className="Result_ListTitle">
                        <li>Период</li>
                        <li>Всего</li>
                        <li>Риски</li>
                    </ul>
                    <div className="Result_sliderContainer" ref={sliderContainer}>
                        {docList.map((item, index) =>
                        {const risk = riskFactors[index]
                            return(
                                <div className="Result_ListContainer">
                            <ul className="Result_List">
                                <li>{changeDate(item.date)}</li>
                                <li>{item.value}</li>
                                <li>{risk.value}</li>
                            </ul>
                        <img src={require('../images/Result_ListRectangle.png')}/>
                        </div>
                            )})}
                    </div>
                </div>    
                <button onClick={nextSlide}>
                    <img src={require('../images/icons8-шеврон-вправо-90 2.png')}/>
                </button>                 
            </div>               
            </div>
            <div className="ResultPage_section3">
                <h2>Список документов</h2>
                {docsData ? <div className="Doc_container">{docsData.map(item =>
                    {const xmlString = item.ok.content.markup;
                    const parser = new DOMParser;
                    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
                    const xmlText = xmlDoc.documentElement.textContent;
                    return(
                    <div className="Doc_section">
                        <div className="Doc_block">
                            <div className="Doc_date">
                                <p>{changeDate(item.ok.issueDate)}</p>
                                <a href={item.ok.url} target="_blank">{item.ok.source.name}</a>
                            </div>
                            <div className="Doc_title">
                                <h3>{item.ok.title.text}</h3>
                                <p className="Doc_type">{item.ok.attributes.isTechNews ? "Технические новости" : item.ok.attributes.isAnnouncement ? "Анонс" : item.ok.attributes.isDigest ? "Сводка новостей" : "Нейтральная новость"}</p>
                            </div>
                            <div className="Doc_main">
                                <img />
                                <p className="Doc_description">{removeHtmlTags(xmlText)}</p>
                            </div>
                            <div className="Doc_infoButton">
                                <button className="Doc_parentLink"><a href={item.ok.url} target="_blank">Читать в источнике</a></button>
                                <p className="Doc_wordCount">{item.ok.attributes.wordCount}</p>
                            </div>
                        </div>
                    </div>
                    )})}                    
                </div> : null} 
                <button className="ResultPage_paginationButton" onClick={paginationHendler}>Показать больше</button>               
            </div>
        </div>
        </div>
        
    )
}

export default ResultPage;