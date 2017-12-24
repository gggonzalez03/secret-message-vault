import React, { Component } from 'react'
import { connect } from 'react-redux'

import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import TurningDialContainer from '../TurningDial/TurningDialContainer';
import DialHandleContainer from '../DialHandle/DialHandleContainer';
import PassCodeInput from '../PassCodeInput/PassCodeInput';

class LoginPage extends Component {
    state = {}

    // Redirect to the message page
    toMessage() {
        this.props.history.push('message')
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <GoogleLoginButton style={styles.loginButton} />
                </div>
                <div style={styles.passCodeInput}>
                    <PassCodeInput />
                </div>
                <div style={styles.turningDial}>
                    <div style={{ ...styles.handle, height: 350 * 2, width: 350 * 2 }}>
                        <DialHandleContainer />
                    </div>
                    <TurningDialContainer
                        onValidate={() => this.toMessage()}
                    />
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        height: '100%',
        width: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    loginButton: {

    },
    turningDial: {
        display: 'flex',
        justifyContent: 'center',
    },
    handle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    passCodeInput: {
        padding: '2em',
    }
}


const mapStateToProps = ({ index }) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)