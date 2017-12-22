import { combineReducers } from 'redux'

import initialState from './initialState'

function index(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({
    index,
})