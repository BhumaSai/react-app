import React, { useState } from 'react'
import './projects.css'
import { Link } from 'react-router-dom'

const Backgroundchanger = () => {

  const [color,setcolor] = useState('')

  const changeBG = () => {
    var number = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
    var hex = '#'
    for(let i = 0 ; i < 6 ; i++){
      hex += number[Math.floor(Math.random() * number.length)]
    }
    setcolor(hex)
  }

  return (
    <>
    <div className="backgroundChanger" style={{background:color}}>
        <div className='text'>
           <h2>background Changer</h2>
        </div>
      <div className='backgroundChanger-items'>
         <h3>Hex : <span>{color}</span></h3><br />
         <button onClick={changeBG}>change background</button>
      </div>
      <Link to='/projects'>projects</Link>
    </div>
    </>
  )
}

export default Backgroundchanger