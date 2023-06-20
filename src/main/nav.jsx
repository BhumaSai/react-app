import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    <center>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/project'>project</NavLink>
        <NavLink to='/contact'>contact</NavLink>
    </center>
    </>
  )
}

export default Nav