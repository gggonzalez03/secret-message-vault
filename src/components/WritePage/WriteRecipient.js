import React, { Component } from 'react'
import { connect } from 'react-redux'

class WriteRecipient extends Component {
    state = {
        recipient: "",
        passcode: {
            1: 0,
            2: 0,
            3: 0,
        },
    }

    recipientChange(recipient) {
        this.setState({
            recipient: recipient,
        })
    }

    passcodeChange(index, number) {

        // The number should be between 0 and 39
        if (number < 40 && number >= 0)
            this.setState(state => {
                return {
                    ...state,
                    passcode: {
                        ...state.passcode,
                        [index]: number,
                    },
                }
            })
        /**
         * TODO:
         * Add property that indicates whether to show warning on the
         * input box or not
         */
    }

    render() {

        const { recipient, passcode } = this.state

        return (
            <div style={styles.container}>
                <label style={styles.label}>Recipient</label>
                <input type='text' style={styles.input} value={recipient} onChange={event => this.recipientChange(event.target.value)} />
                <label style={styles.label}>Passcode</label>
                <div style={styles.passcodeContainer}>
                    <input type='number' style={styles.passcodeInput} value={passcode[1]} onChange={event => this.passcodeChange(1, event.target.value)} />-
                    <input type='number' style={styles.passcodeInput} value={passcode[2]} onChange={event => this.passcodeChange(2, event.target.value)} />-
                    <input type='number' style={styles.passcodeInput} value={passcode[3]} onChange={event => this.passcodeChange(3, event.target.value)} />
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

const mapStateToProps = ({ }) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteRecipient)