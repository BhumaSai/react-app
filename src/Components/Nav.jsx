import React from 'react'
import { useState } from 'react'
import './Componentsstyles.css'
import { Link, NavLink } from 'react-router-dom'
import {FaBars, FaMoon} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'


function Nav() {

    const [dl,setdl] = useState(false);
    const [oc,setoc] = useState(false);

    const ocSidebar = () => {
        setoc(!oc)
    }

    const dlmode = () => {
        setdl(!dl)
        document.body.style.background = dl?'#000':'#fff';
        document.body.style.color = dl?'#fff' : '#000'
    }


  return (
    <>
    <nav className='nav-section'>
        <div className='nav-items'>
            <div className='nav-logo'>
                <Link to='/portfolio'>BHUMA</Link>
            </div>
            <div className={oc?'hambar display':'hambar'}>
                
            <button onClick={ocSidebar} aria-label='close-sidebar'><FaBars color='#fff'/></button>
            </div>
            <div className={oc?'mobile-screen show':'mobile-screen'}>

            <div className={oc?'nav-links':'nav-links display'}>
                <ul className='links'> 
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/projects'>projects</NavLink></li>
                    <li><NavLink to='/about'>about</NavLink></li>
                    <li><NavLink to='/contact'>contact</NavLink></li>
                </ul>
            </div>
            <div className='DL-mode'>
                {
                    dl?
                    <button onClick={dlmode} aria-label='dlmode'><FaMoon color='#000' background='#fff' /> </button>:
                    <button onClick={dlmode} aria-label='dlmode'><FaMoon color='#fff' background='#000' /> </button>
                }
            </div>
            <div className='oc-btn'>
                    <button onClick={ocSidebar} aria-label='open-sidebar'><ImCross color='#fff' /></button>:
            </div>
                </div>
        </div>
    </nav>
    </>
  )
}

export default Nav