import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton'
import AnonymousLogin from '../AnonymousLogin/AnonymousLogin'

class MessagePage extends Component {
    state = {}
    render() {

        const { message } = this.props

        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <GoogleLoginButton style={styles.loginButton} />
                    <AnonymousLogin style={styles.loginButton} />
                </div>
                <div style={styles.messageContainer}>
                    <div style={styles.clear}>
                    </div>
                    <p align="justify" style={styles.message}>
                        {message}
                    </p>
                    <div style={styles.clear}>
                    </div>
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
    messageContainer: {
        display: 'flex',
        flex: '1',
        flexWrap: 'wrap',
    },
    message: {
        flex: '3',
        fontSize: '1em',
        padding: '1em',
        margin: '0px',
        textIndent: '2em',
        lineHeight: '1.45',
    },
    clear: {
        flex: '1',
    }
}

MessagePage.defaultProps = {

}

MessagePage.propTypes = {

}

const mapStateToProps = ({ message }) => {
    return {
        message: message.message,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage)