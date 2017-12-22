import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class PassCodeInput extends Component {
    state = {}
    render() {
        // props from parent
        const { style } = this.props

        // props from redux
        const { value } = this.props
        return (
            <div style={{...styles.container, ...style}}>
                <div style={styles.input}>{value}</div>&#8226;
                <div style={styles.input}></div>&#8226;
                <div style={styles.input}></div>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassCodeInput)