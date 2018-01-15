import * as api from './firebase-api'
import { setMessage } from './message'

export const TURN_DIAL = 'TURN_DIAL'
export const INPUT_CODE = 'INPUT_CODE'
export const SET_CHECKPOINTS = 'SET_CHECKPOINTS'
export const CLEAR_CHECKPOINT = 'CLEAR_CHECKPOINT'
export const VALIDATE_COMBINATION = 'VALIDATE_COMBINATION'

export function turnDial(value, rotate) {
    return {
        type: TURN_DIAL,
        value: value,
        rotate: rotate,
    }
}

export function setCheckpoints(first, second, third) {
    return {
        type: SET_CHECKPOINTS,
        1: first,
        2: second,
        3: third,
    }
}

export function clearCheckpoint(checkpoint) {
    return {
        type: CLEAR_CHECKPOINT,
        checkpoint: checkpoint,
    }
}

export function inputCode(code, rotate) {
    return {
        type: INPUT_CODE,
        code: code,
        rotate: rotate,
    }
}

export function validateCombination(combination, user, token, onSuccess) {

    let post_id = "id1"
    let passcode = `${combination[1]}-${combination[2]}-${combination[3]}`

    return function (dispatch) {
        api.database.ref('messages/' + post_id).child('token').once('value').then(token1 => {
            api.database.ref('messages/' + post_id).child('user_id').once('value').then(user1 => {
                api.database.ref('messages/' + post_id).child('passcode').once('value').then(passcode1 => {
                    if (token === token1.val() && user === user1.val() && passcode === passcode1.val())
                        api.database.ref('messages/' + post_id).child('message').once('value').then(message => {
                            dispatch(setMessage(message.val()))
                            onSuccess()
                        })
                    else
                        dispatch({
                            type: VALIDATE_COMBINATION,
                            validation: 'invalid'
                        })
                })
            })
        })
    }
}