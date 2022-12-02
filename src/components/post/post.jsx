import React from 'react'
import "./post.css"
import { Link } from 'react-router-dom';

export default function Post({post}) {
  let imgurl="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";
  if(post.photo){
    const PF="http://localhost:5000/imgs/";
    imgurl=PF+post.photo
  }
  return (
    <div className='post'>
      <img 
        className='postImg'
        src={imgurl}
        alt="" 
      />
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <div className="postdetails">
          <p className="postauthor">{`by ${post.author}`}</p>
          <p className="postDate">{new Date(post.createdAt).toDateString()}</p>
        </div>
      </div>
      <p className='postDesc'>
        {post.desc}
      </p>
    </div>
  )
}
