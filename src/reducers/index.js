import { combineReducers } from 'redux'
import initialState from './initialState'

import dial from './dial'

function index(state = initialState.general, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    index,
    dial,
})