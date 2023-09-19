import { SET_LOGIN, SET_LOGOUT } from "../../constants/constants";
import {appAPI} from '../../api/indexAPI'

export const setLogin = (payload) => ({type:SET_LOGIN, payload});

export const login = (login, password) => async(dispatch) =>{
    try{
        const response = await appAPI.login(login, password);
        dispatch(setLogin(response.data));
        localStorage.setItem('isAuth', true);
        localStorage.setItem('accessToken', response.data.accessToken);  
        localStorage.setItem('isLoading', true); 
    }
    catch(error){
        console.log('LOGIN ERROR', error)
    }
}

export const setLogout = (payload) => ({type:SET_LOGOUT, payload});

export const logout = () => async(dispatch) =>{
    try{
        dispatch(setLogout())
        localStorage.removeItem('isLoading');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('AccountInfoTake');
        localStorage.removeItem('innerData');
    }
    catch(error){
        console.error('Не удалось авторизироваться', error);
    }
}