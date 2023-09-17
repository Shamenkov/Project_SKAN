import { SET_OBJECTSEARCH } from "../../constants/constants";

const initialState ={
    items:[]
}

const objectSearchReduce = (state=initialState, action) => {
    switch (action.type){
        case SET_OBJECTSEARCH:
            return{
            ...state,
            items: action.payload.items
        }
        default: return state
    }
}

export default objectSearchReduce;