import { SET_HISTOGRAMS } from "../../constants/constants";

const initialState ={
    data:{}
}

const histogramsReduce = (state=initialState, action) => {
    switch (action.type){
        case SET_HISTOGRAMS:
            return{
            ...state,
            data: action.payload.data
        }
        default: return state
    }
}

export default histogramsReduce;