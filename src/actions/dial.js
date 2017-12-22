export const TURN_DIAL = 'TURN_DIAL'

export function turnDial(value) {
    return {
        type: TURN_DIAL,
        value: value,
    }
}