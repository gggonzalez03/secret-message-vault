import initialState from './initialState'
import {
    TURN_DIAL,
    INPUT_CODE,
    SET_CHECKPOINTS,
    CLEAR_CHECKPOINT,
    VALIDATE_COMBINATION,
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
        case SET_CHECKPOINTS:
            return {
                ...state,
                checkpoints: {
                    ...state.checkpoints,
                    1: action[1],
                    2: action[2],
                    3: action[3],
                }
            }
        case CLEAR_CHECKPOINT:
            return {
                ...state,
                checkpoints: {
                    ...state.checkpoints,
                    toClear: action.checkpoint + 1 // Move to the next checkpoint
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
        case VALIDATE_COMBINATION:
            return {
                ...state,
                validation: action.validation,
            }
        default:
            return state
    }
}

export default dial