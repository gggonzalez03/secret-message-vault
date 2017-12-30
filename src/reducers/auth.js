import initialState from './initialState'
import {
    SIGN_IN_GOOGLE,
    GOOGLE_SIGN_IN_REDIRECT,
    GOOGLE_SIGN_OUT,
} from '../actions/auth'

function auth(state = initialState.auth, action) {
    switch (action.type) {
        case SIGN_IN_GOOGLE:
            return {
                ...state,
                redirectingFromGoogle: action.redirectingFromGoogle,
            }
        case GOOGLE_SIGN_IN_REDIRECT:
            return {
                ...state,
                redirectingFromGoogle: action.redirectingFromGoogle,
                user: action.user,
            }
        case GOOGLE_SIGN_OUT:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}

export default auth