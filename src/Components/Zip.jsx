import React from 'react'
import { Link } from 'react-router-dom'
import './Componentsstyles.css'

function Zip() {
  return (
    <div className='zip-section'>
        <div className='zip-items'>
            <p>something went wrong</p>
            <Link to='/portfolio'>back to home</Link>
        </div>
    </div>
  )
}

export default Zip