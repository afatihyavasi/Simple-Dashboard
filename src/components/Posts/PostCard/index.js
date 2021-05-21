import moment from 'moment'
import './style.scss'
const PostCard = ({ post }) => {
    return (
        <div className="post-item-container">
            <div className="post-item-header">
                <h4 className="post-item-header-title">{post.title}</h4>
                <div className="post-item-header-user-info">
                    <figure>
                        <img src={post.avatar} alt={post.author} />
                    </figure>
                    <h5>{post.author}</h5>
                    <h6 className="post-item-header-user-info-timestamp">
                        {moment(post.createdTime).fromNow()}
                    </h6>
                </div>
            </div>

            <p className="post-item-content">{post.content}</p>
        </div>
    )
}

export default PostCard
