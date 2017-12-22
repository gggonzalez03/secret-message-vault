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

        return (
            <div style={{...styles.container, ...style}}>
                 {/* These statements say that if a code is undefined and it is the current focus, then the value selection should be shown
                     Else, show the code that is saved */}
                <div style={styles.input}>{combination[1] == undefined && combination.focus == 1 ? value : combination[1]}</div>&#8226;
                <div style={styles.input}>{combination[2] == undefined && combination.focus == 2 ? value : combination[2]}</div>&#8226;
                <div style={styles.input}>{combination[3] == undefined && combination.focus == 3 ? value : combination[3]}</div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
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