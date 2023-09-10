import React, { useState } from "react";
import './ResultPage.css'

const ResultPage = () =>{
    const [docList, setDocList] = useState([{'date': '22.10.2020', 'all':0, 'riski':0}, {'date': '22.10.2020', 'all':1, 'riski':0}, {'date': '22.10.2020', 'all':2, 'riski':0},{'date': '22.10.2020', 'all':3, 'riski':0},{'date': '22.10.2020', 'all':4, 'riski':0},{'date': '22.10.2020', 'all':5, 'riski':0},{'date': '22.10.2020', 'all':6, 'riski':0},{'date': '22.10.2020', 'all':7, 'riski':0},{'date': '22.10.2020', 'all':8, 'riski':0},{'date': '22.10.2020', 'all':9, 'riski':0},])
    
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
                <p>Найдено 4 221 вариантов</p>
                <div className="Result_Summary">
                    <button>
                        <img src={require('../images/icons8-шеврон-вправо-90 1.png')}/>
                    </button>
                    <div className="Result_BoardList">
                        <ul className="Result_ListTitle">
                            <li>Период</li>
                            <li>Всего</li>
                            <li>Риски</li>
                        </ul>
                        {docList.map(item =>
                        <div className="Result_ListContainer">
                            <ul className="Result_List">
                            <li>{item.date}</li>
                            <li>{item.all}</li>
                            <li>{item.riski}</li>
                        </ul>
                        <img src={require('../images/Result_ListRectangle.png')}/>
                        </div>)}
                    </div>
                    <button>
                        <img src={require('../images/icons8-шеврон-вправо-90 2.png')}/>
                    </button>
                </div>
            </div>
            <div className="ResultPage_section3">
                <h2>Список документов</h2>
                <div className="Doc_container">
                    <div className="Doc_section">
                        <div className="Doc_block">
                            <div className="Doc_date">
                                <p>13.09.2021</p>
                                <p>Комсомольская правда KP.RU</p>
                            </div>
                            <div className="Doc_title">
                                <h3>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h3>
                                <p className="Doc_type">Технические новости</p>
                            </div>
                            <div className="Doc_main">
                                <img />
                                <p className="Doc_description">SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 
                                4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                                Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают
                                менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.</p>
                            </div>
                            <div className="Doc_infoButton">
                            <button className="Doc_parentLink">Читать в источнике</button>
                            <p className="Doc_wordCount">2 543 слова</p>
                            </div>
                        </div>
                    </div>
                    <div className="Doc_section">
                    <div className="Doc_block">
                        <div className="Doc_date">
                                <p>13.09.2021</p>
                                <p>Комсомольская правда KP.RU</p>
                            </div>
                            <div className="Doc_title">
                                <h3>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h3>
                                <p className="Doc_type">Технические новости</p>
                            </div>
                            <div className="Doc_main">
                                <img />
                                <p className="Doc_description">Кто такой Data Scientist и чем он занимается?
                                Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта
                                — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.
                                В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.</p>
                            </div>
                            <div className="Doc_infoButton">
                            <button className="Doc_parentLink">Читать в источнике</button>
                            <p className="Doc_wordCount">3442</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default ResultPage;