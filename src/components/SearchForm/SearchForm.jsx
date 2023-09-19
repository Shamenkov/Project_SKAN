import React, { useEffect, useState } from "react";
import './SearchForm.css'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
registerLocale('ru', ru)
setDefaultLocale('ru')

const SearchForm = () =>{
    const store = useSelector(state => state)
    //USESTATE/DISPATCH
    const [isValueNotEmpty, setIsValueNotEmpty] = useState(false);
    const [innError, setInnError] = useState(false)
    const [docError, setdocError] = useState(false)
    const [dateError, setdateError] = useState(false)

    const [maxFullness, setMaxFullness] = useState(false)
    const [businesContext, setBusinesContext] = useState(false)
    const [mainRole, setMainRole] = useState(false)
    const [anonsAndCalendar, setAnonsAndCalendar] = useState(false)

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dateValidate, setDateValidate] = useState(false)
    const [validateErrorsDate, setvalidateErrorsDate] = useState('')

    const [innValue, setInnValue] = useState('')
    const [docCountValue, setDocCountValue] = useState('')
    const [selectValue, setSelectValue] = useState('any')

    const [validateErrorsInn,setValidateErrorsInn] = useState('')
    const [ErrorsInn, setErrorsInn] = useState(false)

    const [validateErrorsDocCount,setValidateErrorsDocCount] = useState('')
    const [ErrorsDocCount, setErrorsDocCount] = useState(false)


    // LOGIC

    const validateDateValue = (startDate, endDate) => {
        if (Date.parse(startDate) >= Date.parse(endDate)) {
            setvalidateErrorsDate('Введите корректные данные!');
           setDateValidate(false);
           setdateError(true)
        } else if ((Date.parse(startDate) || Date.parse(endDate)) > Date.now()) {
            setvalidateErrorsDate('Введите корректные данные!');
           setDateValidate(false);
           setdateError(true)
        } else if (endDate === '') {
            setvalidateErrorsDate('Обязательное поле!');
           setDateValidate(false);
           setdateError(true)
        }else if (startDate  === '') {
            setvalidateErrorsDate('Обязательное поле!');
            setDateValidate(false);
            setdateError(true)
        }
        else {
            setdateError(false)
            setDateValidate(true)
            setvalidateErrorsDate('');            
            }
        }

    const validateDocCount = (docCount) => {
        if (!docCount.length) {
           setValidateErrorsDocCount('Обязательное поле!');
           setErrorsDocCount(false);
           setdocError(true)
        } else if (Number(docCount) <1 || Number(docCount) > 1000) {
            setValidateErrorsDocCount('Введите корректные данные!');
            setErrorsDocCount(false);
            setdocError(true)
        } else {
            setErrorsDocCount(true)
            setdocError(false)
           setValidateErrorsDocCount('');            
            }
        }
    

    function validateInn(inn) {
        var result = false;
        if (typeof inn === 'number') {
            inn = inn.toString();
        } else if (typeof inn !== 'string') {
            inn = '';
        }
        if (!inn.length) {
            setValidateErrorsInn ('Это обязательное поле, введите ИНН!');
            setErrorsInn(false);
            setInnError(true)
        } else if (/[^0-9]/.test(inn)) {
            setValidateErrorsInn('Введите корректные данные!');
            setErrorsInn(false) 
            setInnError(true)
        } else if ([10, 12].indexOf(inn.length) === -1) {
            setValidateErrorsInn('Введите корректные данные!');
            setErrorsInn(false);
            setInnError(true)
        } else {
            var checkDigit = function (inn, coefficients) {
                var n = 0;
                for (var i in coefficients) {
                    n += coefficients[i] * inn[i];
                }
                return parseInt(n % 11 % 10);
            };
            switch (inn.length) {
                case 10:
                    var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if (n10 === parseInt(inn[9])) {
                        setValidateErrorsInn('')
                        setErrorsInn(true)
                        setInnError(false)
                        result = true;
                    }
                    break;
                case 12:
                    var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
                        setValidateErrorsInn('')
                        setErrorsInn(true)
                        setInnError(false)
                        result = true;
                    }
                    break;
            }
            if (!result) {
                setValidateErrorsInn('Введите корректные данные');
                setErrorsInn(false);
                setInnError(true)
            }
        }
        return result;
    }
    
    const HandlerChangeStartDate = (date) =>{
        setStartDate(new Date(Date.parse(date)))
    }

    // REQUEST
    const fetchHistogram = () =>{
            localStorage.setItem("innerData", JSON.stringify({"intervalType": "month",            
            "histogramTypes": [
                "totalDocuments",
                "riskFactors"
            ],
            "issueDateInterval": {
                "startDate": startDate,
                "endDate": endDate
            },
            "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                        {
                            "type": "company",
                            "inn": innValue,
                            "maxFullness": maxFullness,
                            "inBusinessNews": null
                        }
                    ],
                    "onlyMainRole": mainRole,
                    "tonality": selectValue,
                    "onlyWithRiskFactors": false
                }
            },
            "similarMode": "duplicates",
            "limit": Number(docCountValue),
            "sortType": "sourceInfluence",
            "sortDirectionType": "desc",
            "attributeFilters": {
                "excludeTechNews": true,
                "excludeAnnouncements": anonsAndCalendar,
                "excludeDigests": true
            }
        }))
    }

    //USE-EFFECT
    useEffect(() =>{
        if(ErrorsInn === true &&  ErrorsDocCount=== true && dateValidate=== true){
            setIsValueNotEmpty(true)
        }else if (ErrorsInn !== true ||  ErrorsDocCount !== true || dateValidate !== true){
            setIsValueNotEmpty(false)
        }
    },[ErrorsInn, ErrorsDocCount, dateValidate])

    useEffect(() =>{
    },[validateErrorsInn,validateErrorsDocCount,docCountValue,innValue,validateErrorsDate,startDate,endDate])
    
    useEffect(() =>{},[isValueNotEmpty])

    return( 
        <div className="SearchForm_Container">
            <div className="FormSetting_container">
                <div className="SearchForm_section1">
                    <label className="FormLabel_Inn">
                        <p className="FormInputTitle">ИНН компании {innError ? <span style={{color: 'red'}}>*</span>: <span style={{color: 'black'}}>*</span>}</p>
                        <input className={innError ? 'innError' : 'innValue'} onBlur={() => validateInn(innValue)} onChange={e=>setInnValue(e.target.value)}placeholder="10 цифр" name="INN"/>
                        <span>{validateErrorsInn}</span>
                    </label>
                    <label>
                        <p className="FormInputTitle">Тональность</p>
                        <select onClick={(e) => setSelectValue(e.target.selectedOptions[0].id)}>
                            <option id='any'>Любая</option>
                            <option id='positive'>Позитивная</option>
                            <option id='negative'>Негативная</option>
                        </select>
                    </label>
                    <label className="FormLabel_DocCount">
                        <p className="FormInputTitle">Количество документов в выдаче {docError ? <span style={{color: 'red'}}>*</span>: <span style={{color: 'black'}}>*</span>}</p>
                        <input className={docError ? 'docError' : 'docCount'} onBlur={() => validateDocCount(docCountValue)} onChange={e=>setDocCountValue(e.target.value)}placeholder="от 1 до 1000 цифр" name="DocCount" type='number'/>
                        <span>{validateErrorsDocCount}</span>
                    </label>
                    <label className="FormLabel_Date">
                        <p className="FormInputTitle">Диапазон поиска {dateError ? <span style={{color: 'red'}}>*</span>: <span style={{color: 'black'}}>*</span>}</p>
                        <div className="datepicker_container" >
                            <DatePicker 
                            onBlur={() => validateDateValue(startDate, endDate)}
                            locale='ru' 
                            selected={startDate} 
                            onChange={HandlerChangeStartDate} 
                            placeholderText='Дата начала' 
                            className = {dateError ? 'dateError' : "startDate"}
                            dateFormat='dd/MM/yyyy'
                            />
                            <DatePicker 
                            className = {dateError ? 'dateError' : "endDate"}
                            onBlur={() => validateDateValue(startDate, endDate)}
                            wrapperClassName="datePicker"
                            endDate={endDate} 
                            locale='ru' 
                            selected={endDate} 
                            onChange={(date) => setEndDate(new Date(Date.parse(date)))} 
                            placeholderText='Дата конца'   
                            dateFormat='dd/MM/yyyy'
                            />                            
                        </div>
                        <span style={{textAlign: "center"}}>{validateErrorsDate}</span>
                    </label>
                </div>
                <div className="SearchForm_section2">
                    <div className="checkboxBlock">
                        <label className="maxFullness">
                            <input type="checkbox" onChange={() => setMaxFullness(!maxFullness)}/>
                            <span className="fakeCheckbox"></span>
                            Признак максимальной полноты
                        </label>
                        <label className="businesContext">
                            <input type="checkbox" onChange={() => setBusinesContext(!businesContext)}/>
                            <span className="fakeCheckbox"></span>
                            Упоминания в бизнес-контексте
                        </label>
                        <label className="mainRole">
                            <input type="checkbox" onChange={() => setMainRole(!mainRole)}/>
                            <span className="fakeCheckbox"></span>
                            Главная роль в публикации
                        </label>
                        <label className="disabledCheckbox">
                            <input type="checkbox" disabled/>
                            <span className="fakeCheckbox"></span>
                            Публикации только с риск-факторами
                        </label>
                        <label className="disabledCheckbox">
                            <input type="checkbox" disabled/>
                            <span className="fakeCheckbox"></span>
                            Включать технические новости рынков
                        </label>
                        <label className="anonsAndCalendar">
                            <input type="checkbox" onChange={() => setAnonsAndCalendar(!anonsAndCalendar)}/>
                            <span className="fakeCheckbox"></span>
                            Включать анонсы и календари
                        </label>
                        <label className="disabledCheckbox">
                            <input type="checkbox" disabled/>
                            <span className="fakeCheckbox"></span>
                            Включать сводки новостей
                        </label>
                </div>
            </div>
        </div>
        {isValueNotEmpty ? <Link to="/ResultPage" className="formSubmit_button" onClick={fetchHistogram}>Поиск</Link> : <button className="formSubmit_buttonDisabled" disabled>Поиск</button>}
        <p>* Обязательные к заполнению поля</p>
    </div>
        
                        
    )
}

export default SearchForm;