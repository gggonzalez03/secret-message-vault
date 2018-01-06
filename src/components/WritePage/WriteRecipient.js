import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import App from '../../App';

class WriteRecipient extends Component {
    state = {}
    render() {
        return (
            <div style={styles.container}>
                <label style={styles.label}>Recipient</label>
                <input type='text' style={styles.input} />
                <label style={styles.label}>Passcode</label>
                <div style={styles.passcodeContainer}>
                    <input type='number' style={styles.passcodeInput} />-
                    <input type='number' style={styles.passcodeInput} />-
                    <input type='number' style={styles.passcodeInput} />
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        padding: '1em',
        alignItems: 'flex-start',
        borderRadius: '8px',
    },
    label: {
        padding: '.5em',
        margin: '.5em',
    },
    input: {
        fontSize: '1em',
        padding: '.5em',
        margin: '.5em',
        borderRadius: '4px',
        border: '1px solid gray'
    },
    passcodeContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    passcodeInput: {
        flex: 1,
        width: '2em',
        height: '2em',
        fontSize: '1em',
        padding: '.5em',
        margin: '.5em',
        borderRadius: '4px',
        border: '1px solid gray'
    }
}

WriteRecipient.defaultProps = {

}

WriteRecipient.propTypes = {

}

const mapStateToProps = ({ }) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteRecipient)