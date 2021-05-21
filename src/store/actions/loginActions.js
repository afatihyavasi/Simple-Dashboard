import { LOG_IN, LOG_OUT } from './type'

const testUser = { username: 'admin', password: 'admin' }

export const logIn = (userData) => {
    let loginStatus
    let errorMessage = ''
    if (
        userData.username === testUser.username &&
        userData.password === testUser.password
    ) {
        loginStatus = true
    } else {
        loginStatus = false
        errorMessage = 'invalid password or username'
    }

    return {
        type: LOG_IN,
        payload: {
            isLogged: loginStatus,
            errorMessage,
            username: userData.username,
        },
    }
}

export const logOut = () => ({
    type: LOG_OUT,
    payload: false,
})
