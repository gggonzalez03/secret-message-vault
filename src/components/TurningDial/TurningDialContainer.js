import React, { Component } from 'react'
import { connect } from 'react-redux'
import TurningDial from './TurningDial'
import {
    turnDial,
    inputCode,
} from '../../actions/dial'

// These containers are created so that the re-renders becomes minimal
class TurningDialContainer extends Component {
    state = {}
    render() {
        // redux action functions
        const { turnDial, inputCode } = this.props
        return (
            <TurningDial
                radius={350}
                tickHeight={20}
                slices={8}
                inBetweenSlicesTicksCount={5}
                color={'black'}
                step={5}
                tickWidth={2}
                callback={(value, rotate) => {
                    turnDial(value, rotate)
                }}
                releaseCallback={(value) => {
                    inputCode(value)
                }}
            />
        )
    }
}

const styles = {

}

const mapStateToProps = ({ dial }) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        turnDial: (value, rotate) => dispatch(turnDial(value, rotate)),
        inputCode: (value) => dispatch(inputCode(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TurningDialContainer)