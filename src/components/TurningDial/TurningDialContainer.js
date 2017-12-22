import React, { Component } from 'react'
import { connect } from 'react-redux'
import TurningDial from './TurningDial'
import {
    turnDial,
} from '../../actions/dial'

// These containers are created so that the re-renders becomes minimal
class TurningDialContainer extends Component {
    state = {}
    render() {
        // redux action functions
        const { turnDial } = this.props
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
            />
        )
    }
}

const styles = {

}

const mapStateToProps = ({ dial }) => {
    return {
        value: dial.value,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        turnDial: (value, rotate) => dispatch(turnDial(value, rotate)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TurningDialContainer)