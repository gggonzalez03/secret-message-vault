import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import UserOptions from '../UserOptions/UserOptions';

import {
    googleSignIn,
    googleSignInRedirect,
    googleSignOut,
} from '../../actions/auth';

class Header extends Component {
    state = {}
    render() {

        // OAuth actions
        const { googleSignIn, googleSignInRedirect, googleSignOut } = this.props

        // OAuth action results on success
        const { user, redirectingFromGoogle } = this.props

        // The page load should be a redirect from google before this kicks off
        // The redirectFromGoogle should immediately be changed to false to prevent infinite render here.
        if (redirectingFromGoogle)
            googleSignInRedirect()

        return (
            <div>
                {!user
                    ? <div style={styles.header}>
                        <GoogleLoginButton
                            callback={() => googleSignIn()}
                        />
                    </div>
                    : <div style={styles.header}>
                        <UserOptions
                            logoutCallback={() => googleSignOut()}
                            user={user}
                        />
                    </div>
                }
            </div>
        )
    }
}

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
}

Header.defaultProps = {
    
}

Header.propTypes = {
    
}

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user,
        redirectingFromGoogle: auth.redirectingFromGoogle,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        googleSignIn: () => dispatch(googleSignIn()),
        googleSignInRedirect: () => dispatch(googleSignInRedirect()),
        googleSignOut: () => dispatch(googleSignOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)