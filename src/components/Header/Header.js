import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import AnonymousLogin from '../AnonymousLogin/AnonymousLogin';
import UserOptions from '../UserOptions/UserOptions';

import {
    googleSignIn,
    googleSignOut,
} from '../../actions/auth';

class Header extends Component {
    state = {}
    render() {

        // OAuth actions
        const { googleSignIn, googleSignOut } = this.props

        // OAuth action results on success
        const { user } = this.props

        return (
            <div>
                {!user
                    ? <div style={styles.header}>
                        <GoogleLoginButton
                            callback={() => googleSignIn()}
                        />
                        <AnonymousLogin />
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        googleSignIn: () => dispatch(googleSignIn()),
        googleSignOut: () => dispatch(googleSignOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)