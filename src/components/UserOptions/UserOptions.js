import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class UserOptions extends Component {
    state = {}
    render() {

        const { user, logoutCallback } = this.props

        return (
            <div
                style={styles.container}
                onClick={() => logoutCallback()}
            >
                <img src={user.photo} alt="user" style={styles.photo}/>
            </div>
        )
    }
}

const styles = {
    container: {
        width: '3em',
        height: '3em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        margin: '.5em',
        marginTop: '1em',
        marginBottom: '1em',
    },
    photo: {
        borderRadius: '50%',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
    }
}

UserOptions.defaultProps = {
    user: {
        name: "",
        photo: "",
        email: "",
    }
}

UserOptions.propTypes = {
    user: PropTypes.object,
    logoutCallback: PropTypes.func,
}

export default UserOptions