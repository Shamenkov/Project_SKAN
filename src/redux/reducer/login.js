import {SET_LOGIN, SET_LOGOUT} from '../../constants/constants'

const initialState ={
    accessToken: '',
    expire:'',
    isAuth: false,
    isLoading:false,
}

const login = (state = initialState, action) =>{
    
    switch(action.type){
        case SET_LOGIN:
            return{
                ...state,
                accessToken:action.payload.accessToken,
                expire:action.payload.expire,
                isAuth: true,
                isLoading:true,
            }
        case SET_LOGOUT:
        return{
            ...state,
            accessToken:'',
            expire:'',
            isAuth: false,
            isLoading:false
        }
        default: return state
    }
    
}

export default login;