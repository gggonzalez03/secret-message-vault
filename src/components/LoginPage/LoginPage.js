import React, { Component } from 'react'
import { connect } from 'react-redux'

import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';

class LoginPage extends Component {
    state = {}
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <GoogleLoginButton style={styles.loginButton}/>
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