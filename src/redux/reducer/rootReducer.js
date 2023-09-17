import { combineReducers } from 'redux';
import login from '../reducer/login'
import accountInfo from '../reducer/getAccountInfo'
import histograms from '../reducer/histograms'
import objectSearchReduce from '../reducer/objectSearch'
import documentsReduce from '../reducer/documents'

const rootReducer = combineReducers({
    login,
    accountInfo,
    histograms,
    objectSearchReduce,
    documentsReduce
});

export default rootReducer;