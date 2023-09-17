import { SET_DOCUMENTS } from "../../constants/constants";
import {appAPI} from '../../api/indexAPI'

export const setDocuments = (payload) => ({type:SET_DOCUMENTS, payload});

export const documents = (ids) => async(dispatch) =>{
    try{
        const response = await appAPI.documents(ids);
        console.log(response.data)
        dispatch(setDocuments(response.data));
    }
    catch(error){
        console.error('Не удалось получить список документов', error);
    }
}