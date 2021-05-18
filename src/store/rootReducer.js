import { combineReducers } from 'redux'
import postsReducer from './reducers/postsReducer'
import usersReducer from './reducers/usersReducer'

export default combineReducers({
    postsReducer,
    usersReducer,
})
