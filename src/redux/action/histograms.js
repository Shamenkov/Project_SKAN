import { SET_HISTOGRAMS } from "../../constants/constants";
import {appAPI} from '../../api/indexAPI'

export const setHistograms = (payload) => ({type:SET_HISTOGRAMS, payload});

export const histograms = (incomingData) => async(dispatch) =>{
    try{
        const response = await appAPI.histograms(incomingData);
        dispatch(setHistograms(response.data));
        console.log(response.data);        
    }
    catch(error){
        console.error('Не удалось получить сводку по количеству публикаций на конкретные даты', error);
    }
}