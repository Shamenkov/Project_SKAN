import React, { useEffect, useState } from "react";
import './SearchForm.css'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { useDispatch } from "react-redux";
import { histograms, setHistograms } from "../../redux/action/histograms";
registerLocale('ru', ru)
setDefaultLocale('ru')
//7710140679
const SearchForm = () =>{
    //USESTATE/DISPATCH
    const dispatch = useDispatch();
    const [isValueNotEmpty, setIsValueNotEmpty] = useState(false);

    const [maxFullness, setMaxFullness] = useState(false)
    const [businesContext, setBusinesContext] = useState(false)
    const [mainRole, setMainRole] = useState(false)
    const [anonsAndCalendar, setAnonsAndCalendar] = useState(false)

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dateValidate, setDateValidate] = useState(true)

    const [innValue, setInnValue] = useState('')
    const [docCountValue, setDocCountValue] = useState('')
    const [selectValue, setSelectValue] = useState('any')

    const [validateErrorsInn,setValidateErrorsInn] = useState('')
    const [ErrorsInn, setErrorsInn] = useState(false)

    const [validateErrorsDocCount,setValidateErrorsDocCount] = useState('')
    const [ErrorsDocCount, setErrorsDocCount] = useState(false)


    // LOGIC
    const validateDocCount = (docCount) => {
        if (!docCount.length) {
           setValidateErrorsDocCount('Обязательное поле!');
           setErrorsDocCount(false);
        } else if (Number(docCount) <1 || Number(docCount) > 1000) {
            setValidateErrorsDocCount('Введите корректные данные!');
            setErrorsDocCount(false);
        } else {
            setErrorsDocCount(true)
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
        } else if (/[^0-9]/.test(inn)) {
            setValidateErrorsInn('Введите корректные данные!');
            setErrorsInn(false) 
        } else if ([10, 12].indexOf(inn.length) === -1) {
            setValidateErrorsInn('Введите корректные данные!');
            setErrorsInn(false);
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
                        result = true;
                    }
                    break;
                case 12:
                    var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
                        setValidateErrorsInn('')
                        setErrorsInn(true)
                        result = true;
                    }
                    break;
            }
            if (!result) {
                setValidateErrorsInn('Введите корректные данные');
                setErrorsInn(false);
            }
        }
        return result;
    }
    
    const HandlerChangeStartDate = (date) =>{
        setStartDate(date)
        console.log(startDate)
    }

    // REQUEST
    const fetchHistogram = () =>{
        const innerData = {
            "issueDateInterval": {
              "startDate": '2019-01-01T00:00:00+03:00',              
              "endDate": '2022-08-31T23:59:59+03:00'
            },
            "searchContext": {
              "targetSearchEntitiesContext": {
                "targetSearchEntities": [
                  {
                    "type": "company",
                    "sparkId": null,
                    "entityId": null,
                    "inn": innValue,
                    "maxFullness": maxFullness,
                    "inBusinessNews": businesContext
                  }
                ],
                "onlyMainRole": mainRole,
                "tonality": "any",
                "onlyWithRiskFactors": false,
                "riskFactors": {
                  "and": [],
                  "or": [],
                  "not": []
                },
                "themes": {
                  "and": [],
                  "or": [],
                  "not": []
                }
              },
              "themesFilter": {
                "and": [],
                "or": [],
                "not": []
              }
            },
            "searchArea": {
              "includedSources": [],
              "excludedSources": [],
              "includedSourceGroups": [],
              "excludedSourceGroups": []
            },
            "attributeFilters": {
              "excludeTechNews": true,
              "excludeAnnouncements": anonsAndCalendar,
              "excludeDigests": true
            },
            "similarMode": "none",
            "limit": Number(docCountValue),
            "sortType": "sourceInfluence",
            "sortDirectionType": "desc",
            "intervalType": "month",
            "histogramTypes": [
              "totalDocuments",
              "riskFactors"
            ]
          }

        console.log(innerData);
        
        dispatch(histograms(innerData))
    }

    //USE-EFFECT
    useEffect(() =>{
        if(ErrorsInn === true &&  ErrorsDocCount=== true && dateValidate=== true){
            setIsValueNotEmpty(true)
        }else if (ErrorsInn !== true ||  ErrorsDocCount !== true || dateValidate=== true){
            setIsValueNotEmpty(false)
        }
    },[ErrorsInn, ErrorsDocCount, dateValidate])

    useEffect(() =>{
    },[validateErrorsInn,validateErrorsDocCount,docCountValue,innValue])
    
    useEffect(() =>{},[isValueNotEmpty])

    return( 
        <div className="SearchForm_Container">
            <div className="FormSetting_container">
                <div className="SearchForm_section1">
                    <label className="FormLabel_Inn">
                        <p className="FormInputTitle">ИНН компании *</p>
                        <input onBlur={() => validateInn(innValue)} onChange={e=>setInnValue(e.target.value)}placeholder="10 цифр" name="INN"/>
                        <span>{validateErrorsInn}</span>
                    </label>
                    <label>
                        <p className="FormInputTitle">Тональность</p>
                        <select onClick={e => console.log(e)}>
                            <option id='any' className="any">Любая</option>
                            <option id='positive' className="positive">Позитивная</option>
                            <option id='negative' className="negative" >Негативная</option>
                        </select>
                    </label>
                    <label className="FormLabel_DocCount">
                        <p className="FormInputTitle">Количество документов в выдаче*</p>
                        <input onBlur={() => validateDocCount(docCountValue)} onChange={e=>setDocCountValue(e.target.value)}placeholder="от 1 до 1000 цифр" name="DocCount" type='number'/>
                        <span>{validateErrorsDocCount}</span>
                    </label>
                    <label className="FormLabel_Date">
                        <p className="FormInputTitle">Диапазон поиска *</p>
                        <div className="datepicker_container">
                            <DatePicker 
                            locale='ru' 
                            selected={startDate} 
                            onChange={HandlerChangeStartDate} 
                            placeholderText='Дата начала' 
                            className="startDate"
                            dateFormat='dd/MM/yyyy'
                            />
                            <DatePicker 
                            wrapperClassName="datePicker"
                            endDate={endDate} 
                            locale='ru' 
                            selected={endDate} 
                            onChange={(date) => setEndDate(date)} 
                            placeholderText='Дата конца'   
                            className="endDate"
                            dateFormat='dd/MM/yyyy'
                            />
                            
                        </div>
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
        {isValueNotEmpty ? <button className="formSubmit_button" onClick={fetchHistogram}>Поиск</button> : <button className="formSubmit_buttonDisabled" disabled>Поиск</button>}
        <p>* Обязательные к заполнению поля</p>
    </div>
        
                        
    )
}

export default SearchForm;