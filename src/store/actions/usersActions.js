import { GET_USERS } from './type'

export const getUsers = () => async (dispatch) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`)
    const data = await response.json()
    dispatch({ type: GET_USERS, payload: data })
}
