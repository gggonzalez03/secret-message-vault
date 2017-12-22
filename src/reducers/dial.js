import initialState from './initialState'
import {
    TURN_DIAL
} from '../actions/dial'

function dial(state = initialState.dial, action) {
    switch (action.type) {
        case TURN_DIAL: {
            return {
                ...state,
                value: action.value,
                rotate: action.rotate,
            }
        }
        default:
            return state
    }
}

export default dial