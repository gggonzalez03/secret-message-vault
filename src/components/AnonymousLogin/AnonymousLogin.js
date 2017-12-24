import React, { Component } from 'react'
import Icon from 'react-icons-kit'
import { userSecret } from 'react-icons-kit/fa/userSecret'

class AnonymousLogin extends Component {
    state = {}
    render() {
        const { style } = this.props
        return (
            <div style={{ ...styles.container, ...style }}><Icon size={32} icon={userSecret} /></div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '2px',
        backgroundColor: 'rgb(206, 68, 68)',
        color: 'white',
        cursor: 'pointer',
        padding: '.5em',
        margin: '.5em',
        marginTop: '1em',
        marginBottom: '1em',
    }
}

export default AnonymousLogin