import { SET_DOCUMENTS } from "../../constants/constants";

const initialState ={
}

const documentsReduce = (state=initialState, action) => {
    switch (action.type){
        case SET_DOCUMENTS:
            return{
            ...state,
            items: action.payload
        }
        default: return state
    }
}

export default documentsReduce;