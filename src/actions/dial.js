export const TURN_DIAL = 'TURN_DIAL'

export function turnDial(value, rotate) {
    return {
        type: TURN_DIAL,
        value: value,
        rotate: rotate,
    }
}