import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../Header/Header';

class MessagePage extends Component {
    state = {}
    render() {

        const { message } = this.props

        return (
            <div style={styles.container}>
                <Header/>
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

const mapStateToProps = ({ message }) => {
    return {
        message: message.message.message,
        title: message.message.title,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage)