export const TURN_DIAL = 'TURN_DIAL'
export const INPUT_CODE = 'INPUT_CODE'
export const SET_CHECKPOINTS = 'SET_CHECKPOINTS'
export const CLEAR_CHECKPOINT = 'CLEAR_CHECKPOINT'

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