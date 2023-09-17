import { SET_OBJECTSEARCH } from "../../constants/constants";
import {appAPI} from '../../api/indexAPI'

export const setObjectSearch = (payload) => ({type:SET_OBJECTSEARCH, payload});

export const objectSearch = (incomingData) => async(dispatch) =>{
    try{
        const response = await appAPI.objectSearch(incomingData);
        console.log(response.data)
        dispatch(setObjectSearch(response.data));
    }
    catch(error){
        console.error('Не удалось получить список id записей', error);
    }
}