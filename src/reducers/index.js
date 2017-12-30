import { combineReducers } from 'redux'
import initialState from './initialState'

import dial from './dial'
import message from './message'
import auth from './auth'

function index(state = initialState.general, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    index,
    dial,
    message,
    auth,
})