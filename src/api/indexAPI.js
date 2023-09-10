import axios from 'axios';

import {
  BASE_URL,
  LOGIN,
  ACCOUNT_INFO,
  HISTOGRAMS
} from '../constants/constants';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    // 'Content-Type': 'application/json', 
  }
});

export const appAPI = {
  async login(login, password) {
    try {
      return await instance.post(LOGIN,
        {login, password}
      );
    } catch (err) {
      console.error('Не удалось авторизироваться', err);
    }
  },

  async getAccountInfo (){
    try{
      return await instance.get(ACCOUNT_INFO, {headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        // 'Content-Type': 'application/json', 
      }});
    }
    catch(err){
      console.error('Не удалось получить информацию об аккаунте', err);
    }
  },

  async histograms(incomingData){
    try{
      return await instance.post(HISTOGRAMS, incomingData);
    }
    catch(err){
      console.error('Не удалось получить сводку по количеству публикаций на конкретные даты', err);
    }
  }
};