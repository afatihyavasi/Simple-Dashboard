import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './store/actions/postsActions'
import { getUsers } from './store/actions/usersActions'
import Layout from "./components/Layout";
import Login from "./components/Login";
import Users from "./components/Users"
function App() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postsReducer.posts)

    useEffect(() => {
        dispatch(getPosts())
        dispatch(getUsers())
    }, [])

    return (
        <Layout >
            <Users />
        </Layout>
    )
}

export default App
