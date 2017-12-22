import React, { Component } from 'react'

class GoogleLoginButton extends Component {
    state = {}
    render() {
        const { style } = this.props
        return (
            <div style={{...styles.container, ...style}}>Google Login</div>
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
        padding: '1em',
        margin: '1em',
    }
}

export default GoogleLoginButton