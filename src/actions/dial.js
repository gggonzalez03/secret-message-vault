export const TURN_DIAL = 'TURN_DIAL'
export const INPUT_CODE = 'INPUT_CODE'

export function turnDial(value, rotate) {
    return {
        type: TURN_DIAL,
        value: value,
        rotate: rotate,
    }
}

export function inputCode(code, rotate) {
    return {
        type: INPUT_CODE,
        code: code,
        rotate: rotate,
    }
}