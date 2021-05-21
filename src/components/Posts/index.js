import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../store/actions/postsActions'
import './style.scss'
import PostCard from './PostCard'

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postsReducer.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div className="posts">
            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts
