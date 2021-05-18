import { GET_USERS } from '../actions/type'

const INITIAL_STATE = {
    users: [],
    errorMessage: '',
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }
        default:
            return state
    }
}

export default usersReducer
