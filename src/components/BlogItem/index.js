// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, author, avatarUrl, topic} = details
  return (
    <Link to={`/blogs/${id}`} className="item-Link">
      <li className="blogItem-cont">
        <img src={imageUrl} alt={`item${id}`} className="blogItem-image" />
        <div className="blogItem-info-cont">
          <p className="blogItem-topic">{topic}</p>
          <h1 className="blogItem-title">{title}</h1>
          <div className="blogItem-author-info-cont">
            <img
              src={avatarUrl}
              alt={`avatar${id}`}
              className="blogItem-author-logo"
            />
            <p className="blogItem-author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
