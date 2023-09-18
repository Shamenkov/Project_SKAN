import { GET_ACCOUNT_INFO } from "../../constants/constants";
import {appAPI} from '../../api/indexAPI'

export const GetAccountInfo = (payload) => ({type:GET_ACCOUNT_INFO, payload});

export const accountInfo = () => async(dispatch) =>{
    try{        
        const response = await appAPI.getAccountInfo()
        dispatch(GetAccountInfo(response.data))
        localStorage.setItem('AccountInfoTake', true);
        localStorage.removeItem('isLoading');
    }
    catch(error){
        console.error('Не удалось получить информацию об аккаунте', error);
    }
}