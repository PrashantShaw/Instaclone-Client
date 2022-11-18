import React from 'react'

const Card = ({ data }) => {
  return (
    <div className='card'>
      <div className='top-section'>
        <div className='name-location'>
          <p>
            <span className='name'>{data.name}</span> <br />
            <span className='location'>{data.location}</span>
          </p>
        </div>
        <div className='dots'>
          <img src={require('../Images/more.png')} alt='more' />
        </div>
      </div>
      <div className='img-section'>
        <img src={data.PostImage} alt='pune city' />
      </div>
      <div className='desc-section'>
        <div className='upper-desc'>
          <div className='heart-rocket-likes'>
            <img src={require('../Images/heart.png')} alt='heart' />
            <span>
              <img src={require('../Images/send.png')} alt='send' />
            </span>
            <div className='likes'>{data.likes} likes</div>
          </div>
          <div className='date'>{data.date}</div>
        </div>
        <div className='description'>{data.description}</div>
      </div>
    </div>
  )
}

export default Card