import {GET_ACCOUNT_INFO} from '../../constants/constants'

const initialState ={
    usedCompanyCount: '',
    companyLimit: ''
}

const accountInfo = (state = initialState, action) =>{
    switch(action.type){
        case GET_ACCOUNT_INFO:
            return{
                ...state,
                usedCompanyCount:action.payload.eventFiltersInfo.usedCompanyCount,
                companyLimit: action.payload.eventFiltersInfo.companyLimit
            }
        default: return state
    }
    
}

export default accountInfo;