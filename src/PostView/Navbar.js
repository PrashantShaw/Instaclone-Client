import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <div className='logo-name'>
          <img
            src={require('../Images/instagram.png')}
            alt='logo'
          />
          <span>INSTACLONE</span>
        </div>
      </div>
      <div className="camera-icon">
        <Link
          to='/FormPage'
        >
          <img
            src={require('../Images/camera.png')}
            alt='camera'
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar