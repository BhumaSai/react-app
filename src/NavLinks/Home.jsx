import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { FaHandPointDown } from 'react-icons/fa'
import './links.css'

const Nav = React.lazy(()=>import('../Components/Nav'))
const Footer = React.lazy(()=>import('../Components/Footer'))


function Home() {
  return (
    <>
    <Suspense fallback={<h1>loading...</h1>}><Nav /></Suspense>
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-content'>
            <h2>Hii , This Is Sai</h2>
            <p>I am a <span>freelancer</span></p>
        </div>
        <div className='project-det'>
          <h3>For more information about projects</h3>
          <FaHandPointDown size='2rem'/><br /><br />
          <Link to='/projects'> projects</Link>
        </div>
      </div>
    </section>
    <Suspense fallback={<h1>loading....</h1>}><Footer /></Suspense>
    </>
  )
}

export default Home;