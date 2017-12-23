import initialState from './initialState'
import {
    TURN_DIAL,
    INPUT_CODE,
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
        case INPUT_CODE: {   
            
            /**
             * TODO:
             * Limit the focus number to 3 since there's only 3 combinations
             * any number greater than that will mean that the user is done with the code input
             */
            return {
                ...state,
                combination: {
                    ...state.combination,
                    [state.combination.focus]: action.code,
                    focus: ++state.combination.focus
                },
                lastRotation: action.rotate,
            }
        }
        default:
            return state
    }
}

export default dial