import { combineReducers } from 'redux';
import login from '../reducer/login'
import accountInfo from '../reducer/getAccountInfo'
import histogramsReduce from '../reducer/histograms'
import objectSearchReduce from '../reducer/objectSearch'
import documentsReduce from '../reducer/documents'

const rootReducer = combineReducers({
    login,
    accountInfo,
    histogramsReduce,
    objectSearchReduce,
    documentsReduce
});

export default rootReducer;