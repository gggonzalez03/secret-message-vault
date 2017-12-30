import React, { Component } from 'react'
import Icon from 'react-icons-kit'
import { PropTypes } from 'prop-types'
import { googlePlus } from 'react-icons-kit/fa/googlePlus'

class GoogleLoginButton extends Component {
    state = {}
    render() {
        const { style } = this.props
        return (
            <div
                style={{ ...styles.container, ...style }}
                onClick={() => this.props.callback()}
            >
                <Icon size={32} icon={googlePlus} />
            </div>
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

GoogleLoginButton.defaultProps = {
    callback: () => { }
}

GoogleLoginButton.propTypes = {
    callback: PropTypes.func,
}

export default GoogleLoginButton