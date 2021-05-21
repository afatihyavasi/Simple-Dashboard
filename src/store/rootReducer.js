import { combineReducers } from 'redux'
import postsReducer from './reducers/postsReducer'
import usersReducer from './reducers/usersReducer'
import loginReducer from './reducers/loginReducer'
export default combineReducers({
    postsReducer,
    usersReducer,
    loginReducer,
})
