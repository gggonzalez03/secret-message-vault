import * as fbapi from './firebase-api'

export const SIGN_IN_GOOGLE = 'SIGN_IN_GOOGLE'
export const GOOGLE_SIGN_IN_REDIRECT = 'GOOGLE_SIGN_IN_REDIRECT'
export const GOOGLE_SIGN_OUT = 'GOOGLE_SIGN_OUT'

export function googleSignIn() {
    return function (dispatch) {
        var provider = new fbapi.fb.auth.GoogleAuthProvider()
        fbapi.fb.auth().signInWithRedirect(provider)

        dispatch({
            type: SIGN_IN_GOOGLE,
            redirectingFromGoogle: true,
        })
    }
}

export function googleSignInRedirect() {
    return function (dispatch) {
        fbapi.fb.auth().getRedirectResult().then(function (result) {
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
            }
            // The signed-in user info.
            var user = result.user;

            if (user)
                user = {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    refreshToken: user.refreshToken,
                }
            else
                user = null
            
            dispatch({
                type: GOOGLE_SIGN_IN_REDIRECT,
                user: user,
                redirectingFromGoogle: false,
            })
        }).catch(function (error) {
            dispatch({
                type: GOOGLE_SIGN_IN_REDIRECT,
                user: error,
                redirectingFromGoogle: false,
            })
        })
    }
}

export function googleSignOut() {
    return function(dispatch) {
        fbapi.fb.auth().signOut().then(() => {
            dispatch({
                type: GOOGLE_SIGN_OUT,
                user: null,
            })
        })
    }
}