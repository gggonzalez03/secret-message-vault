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

/**
 * TODO:
 * This function needs refactoring
 */
export function googleSignInRedirect() {
    return function (dispatch) {
        fbapi.fb.auth().getRedirectResult().then(function (result) {
            
            var token = ""
            
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                token = result.credential.accessToken;
            }
            // The signed-in user info.
            var user = result.user;

            // Check the current redirect user values
            if (user) {
                user = {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    refreshToken: user.refreshToken,
                    token: token,
                }

                dispatch({
                    type: GOOGLE_SIGN_IN_REDIRECT,
                    user: user,
                    redirectingFromGoogle: false,
                })
            }
            else {
                // Check maybe the user is still logged in from the last session
                fbapi.fb.auth().onAuthStateChanged(user => {
                    let loggedInUser = null

                    if (user)
                        loggedInUser = {
                            uid: user.uid,
                            name: user.displayName,
                            email: user.email,
                            photo: user.photoURL,
                            refreshToken: user.refreshToken,
                        }

                    dispatch({
                        type: GOOGLE_SIGN_IN_REDIRECT,
                        user: loggedInUser,
                        redirectingFromGoogle: false,
                    })
                })
            }
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
    return function (dispatch) {
        fbapi.fb.auth().signOut().then(() => {
            dispatch({
                type: GOOGLE_SIGN_OUT,
                user: null,
            })
        })
    }
}