import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='left-half'>
                <img
                    src={require('../Images/trees.jpg')}
                    alt='trees' />
            </div>
            <div className='right-half'>
                <h1>10x Team 04</h1>
                <div className='router-btn'>
                    <button><Link
                        to='/PostView'
                        style={{
                            textDecoration: 'none',
                            color: 'green',
                            fontSize: '20px'
                        }}
                    >
                        Enter</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage