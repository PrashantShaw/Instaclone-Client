import React from 'react'
import './style.css'

function ViewPostPopup({ post, open, close }) {

  console.log(post)

  if (open) {
    return (
      <div
        onClick={close}
        className='viewpost-overlay'>
        <div
          onClick={(e) => e.stopPropagation()}
          className='viewpost-popup'>
          <div className='popup-img'>
            <img src={post.PostImage} alt={post.location} />
          </div>
          <div className='popup-rightside'>
            <h1>{post.description}</h1>
            <h2>{post.name}</h2>
            <h3>{post.location}</h3>
            <div className='like-date'>
              <span>Likes : {post.likes}</span>
              <span>{post.date}</span>
            </div>
            <p className='sample-txt'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewPostPopup