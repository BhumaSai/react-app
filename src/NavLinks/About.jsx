import React,{Suspense} from 'react'
import './links.css'

const Nav = React.lazy(()=>import('../Components/Nav'))
const Footer = React.lazy(()=>import('../Components/Footer'))


function About() {
  return (
    <>
    <Suspense fallback={<h1>loading...</h1>}><Nav /></Suspense>
    <section className='about-section'>
      <h2>About me</h2>
      <div className='about-det'>
        <ul className='about-text'>
          <li>Hello,my name is sai,i am a student.</li>
          <li>i have completed front-end developement.</li>
          <li>i am learning back-end developement also.</li>
          <li>i am looking for to be a full stack developer</li>
          <li> languages i know <b>HTML5,CSS3,JAVASCRIPT & REACT JS</b></li>
       </ul>
      </div>
    </section>
    <Suspense fallback={<h1>loading....</h1>}><Footer /></Suspense>
    </>
  )
}

export default About;