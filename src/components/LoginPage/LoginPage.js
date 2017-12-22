import React, { Component } from 'react'
import { connect } from 'react-redux'

import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import TurningDial from '../TurningDial/TurningDial';
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
                    <TurningDial
                        radius={350}
                        tickHeight={20}
                        slices={8}
                        inBetweenSlicesTicksCount={5}
                        color={'black'}
                        step={5}
                        tickWidth={2}
                        callback={(value) => {
                            console.log(value)
                        }}
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