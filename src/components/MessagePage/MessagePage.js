import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton'

class MessagePage extends Component {
    state = {}
    render() {

        const { message } = this.props

        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <GoogleLoginButton style={styles.loginButton} />
                </div>
                <div style={styles.message}>
                    {message}
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
    message: {
        
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