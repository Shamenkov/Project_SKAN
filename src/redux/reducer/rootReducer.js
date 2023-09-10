import { combineReducers } from 'redux';
import login from '../reducer/login'
import accountInfo from '../reducer/getAccountInfo'


const rootReducer = combineReducers({
    login,
    accountInfo,

});

export default rootReducer;