import initialState from './initialState'
import {
    SET_MESSAGE,
} from '../actions/message'

function dial(state = initialState.message, action) {
    switch (action.type) {
        case SET_MESSAGE: {
            return {
                ...state,
                message: action.message,
            }
        }
        default:
            return state
    }
}

export default dial