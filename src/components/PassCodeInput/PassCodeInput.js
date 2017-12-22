import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class PassCodeInput extends Component {
    state = {}
    render() {
        // props from parent
        const { style } = this.props

        // props from redux
        const { value, combination } = this.props

        /**
         * TODO:
         * Refactor this
         */
        var combinationWithStatus = Object.values(combination).map((value, index) => {

            var status = 'inputUnset'

            if (combination.focus == index + 1)
                status = 'inputActive'
            else {
                if (combination.focus != index + 1 && value != undefined)
                    status = 'inputSet'
            }

            return {
                place: index + 1,
                value: value,
                status: status,
                styles: styles[status]
            }
        })

        return (
            <div style={{ ...styles.container, ...style }}>
                {/* These statements say that if a code is undefined and it is the current focus, then the value selection should be shown
                    Else, show the code that is saved */}
                <div style={combinationWithStatus[0].styles}>{combination[1] == undefined && combination.focus == 1 ? value : combination[1]}</div>&#8226;
                <div style={combinationWithStatus[1].styles}>{combination[2] == undefined && combination.focus == 2 ? value : combination[2]}</div>&#8226;
                <div style={combinationWithStatus[2].styles}>{combination[3] == undefined && combination.focus == 3 ? value : combination[3]}</div>
            </div>
        )
    }
}

const inputStyleUnset = {
    display: 'flex',
    width: '.5em',
    height: '.5em',
    padding: '1em',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: '8px',
    margin: '.5em',
    fontSize: '2em'
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputUnset: {
        ...inputStyleUnset,
        borderColor: 'gray',
    },
    inputSet: {
        ...inputStyleUnset,
        borderColor: '#4af953',
    },
    inputActive: {
        ...inputStyleUnset,
        borderColor: '#fcd083'
    },
}

PassCodeInput.defaultProps = {
    style: {

    },
}

PassCodeInput.propTypes = {
    style: PropTypes.object,
}

const mapStateToProps = ({ dial }) => {
    return {
        value: dial.value,
        combination: dial.combination,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassCodeInput)