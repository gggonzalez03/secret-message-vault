import React, { Component } from 'react'
import { connect } from 'react-redux'

import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import TurningDialContainer from '../TurningDial/TurningDialContainer';
import DialHandle from '../DialHandle/DialHandle';

class LoginPage extends Component {
    state = {}
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <GoogleLoginButton style={styles.loginButton} />
                </div>
                <div style={styles.turningDial}>
                    <div style={{ ...styles.handle, height: 350 * 2, width: 350 * 2 }}>
                        <DialHandle
                            color='#2572ed'
                            radius={150}
                            grip={60}
                        />
                    </div>
                    <TurningDialContainer/>
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