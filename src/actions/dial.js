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

export function validateCombination(user_id, message_id, combination, token, onSuccess) {

    let passcode = `${combination[1]}-${combination[2]}-${combination[3]}`

    return function (dispatch) {
        api.database.ref('inboxes/' + user_id + '/' + message_id).once('value').then(result => {

            // This message result includes all the info including the message, the passcode, and the token
            // This is not the ideal setup since it's supposed to protect these values. This is a temporary solution.
            var message = result.val()

            if (passcode === message.passcode && token === message.token) {

                // The dispatch value is limited to message and title values
                dispatch(setMessage({
                    message: message.message,
                    title: message.title,
                }))
                onSuccess()
            }
            else
                dispatch({
                    type: VALIDATE_COMBINATION,
                    validation: 'invalid'
                })
        })
    }
}