import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TurningDial from './TurningDial'
import {
    turnDial,
    inputCode,
    setCheckpoints,
    clearCheckpoint,
    validateCombination,
} from '../../actions/dial'

// These containers are created so that the re-renders becomes minimal
class TurningDialContainer extends Component {
    state = {}

    keepInRange(value, maxValue) {
        if (value > maxValue)
            return value % maxValue
        return value
    }

    calculateCheckpoints(value, slices, step) {

        let maxTickValue = slices * step - 1

        let checkpointOffset
        let first, second, third

        checkpointOffset = Math.floor(maxTickValue / 3)

        // second and first checkpoints here might be over the range
        // The order of these checkpoints are determined based on turn direction (left)
        first = value + checkpointOffset
        second = first + checkpointOffset
        third = value // The third checkpoint will surely be in range

        return {
            first: this.keepInRange(first, maxTickValue),
            second: this.keepInRange(second, maxTickValue),
            third: third,
        }
    }

    render() {
        // redux action functions
        const { turnDial, inputCode, setCheckpoints, clearCheckpoint, validateCombination } = this.props

        // redux props
        const { checkpoints, focus } = this.props

        // default props
        const { onValidate } = this.props

        // Let this redux props editable
        let { combination } = this.props

        /**
         * TODO:
         * Create a variable that stores props for
         * the dial - const dialProps
         */

        return (
            <TurningDial
                radius={350}
                tickHeight={20}
                slices={8}
                inBetweenSlicesTicksCount={5}
                color={'black'}
                step={5}
                tickWidth={2}
                reverse={true}
                callback={(value, rotate) => {

                    // Only accumulate the checkpoints when the user is focused on inputting the second number
                    if (checkpoints[checkpoints.toClear] === value && focus === 2)
                        clearCheckpoint(checkpoints.toClear)

                    turnDial(value, rotate)
                }}
                releaseCallback={(value, rotate) => {
                    /**
                     * TODO:
                     * 
                     * Refactor this code
                     */
                    if (focus === 2) {
                        // Only set the second number when all checkpoints are cleared
                        if (checkpoints.toClear > 3)
                            inputCode(value, rotate)
                        else {
                            /**
                             * TODO:
                             * Show guides
                             * 
                             * console.log("Turn 360 degrees then release at your second number.")
                             */
                        }
                    }
                    else if (focus === 3) {

                        const { message_id, token } = this.props.match.params
                        const { user } = this.props

                        combination[focus] = value

                        inputCode(value, rotate)

                        // Combination should have a 1, 2, and 3 as name parameters
                        validateCombination(user.uid, message_id, combination, token, () => onValidate())
                    }
                    else {
                        let checkpoints = this.calculateCheckpoints(value, 8, 5)

                        // Set the checkpoints to get ready for the second input
                        setCheckpoints(checkpoints.first, checkpoints.second, checkpoints.third)

                        inputCode(value, rotate)
                    }
                }}
            />
        )
    }
}

TurningDialContainer.defaulProps = {
    onValidate: () => { }
}

TurningDialContainer.propTypes = {
    onValidate: PropTypes.func,
}

const mapStateToProps = ({ dial, auth }) => {
    return {
        focus: dial.combination.focus,
        checkpoints: dial.checkpoints,
        combination: dial.combination,
        user: auth.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        turnDial: (value, rotate) => dispatch(turnDial(value, rotate)),
        inputCode: (value, rotate) => dispatch(inputCode(value, rotate)),
        setCheckpoints: (first, second, third) => dispatch(setCheckpoints(first, second, third)),
        clearCheckpoint: (toClear) => dispatch(clearCheckpoint(toClear)),
        validateCombination: (user, message_id, combination, token, callback) => dispatch(validateCombination(user, message_id, combination, token, callback)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TurningDialContainer))