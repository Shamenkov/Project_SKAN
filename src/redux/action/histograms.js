import { SET_HISTOGRAMS } from "../../constants/constants";
import {appAPI} from '../../api/indexAPI'

export const setHistograms = (payload) => ({type:SET_HISTOGRAMS, payload});

export const histograms = (incomingData) => async(dispatch) =>{
    try{
        const response = await appAPI.histograms(incomingData);
        console.log(response)
        // dispatch(setHistograms(response.data));
    }
    catch(error){
        console.error('Не удалось получить сводку по количеству публикаций на конкретные даты', error);
    }
}
