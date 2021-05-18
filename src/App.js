import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './store/actions/postsActions'
import { getUsers } from './store/actions/usersActions'
import Layout from "./components/Layout";

function App() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postsReducer.posts)

    useEffect(() => {
        dispatch(getPosts())
        dispatch(getUsers())
    }, [])

    return (
        <div>
           <Layout />
        </div>
    )
}

export default App
