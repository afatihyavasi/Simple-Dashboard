import { GET_POSTS } from './type'

export const getPosts = () => async (dispatch) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/post`)
    const data = await response.json()
    dispatch({ type: GET_POSTS, payload: data })
}
