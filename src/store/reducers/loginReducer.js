import { LOG_OUT, LOG_IN } from '../actions/type'

const INITIAL_STATE = {
    isLogged: false,
    errorMessage: '',
    username: '',
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLogged: action.payload.isLogged,
                errorMessage: action.payload.errorMessage,
                username: action.payload.username,
            }
        case LOG_OUT:
            return { ...state, isLogged: action.payload }
        default:
            return state
    }
}

export default loginReducer
