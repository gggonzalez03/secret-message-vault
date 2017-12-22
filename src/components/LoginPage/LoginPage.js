import React, { Component } from 'react'
import { connect } from 'react-redux'

import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import TurningDial from '../TurningDial/TurningDial';

class LoginPage extends Component {
    state = {}
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <GoogleLoginButton style={styles.loginButton} />
                </div>
                <div style={styles.turningDial}>
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