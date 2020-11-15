import {BUY_CHOCLATE} from './choclateTypes'

const initialState = {
    numOfChoclates: 15
}

const choclateReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CHOCLATE: return {
            ...state,
            numOfChoclates: state.numOfChoclates - 1
        }
        default: return state
    }
}

export default choclateReducer
