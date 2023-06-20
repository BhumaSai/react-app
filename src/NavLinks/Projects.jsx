import React,{Suspense} from 'react'
import { Link } from 'react-router-dom'
import bgChange from './assets/bg-changer.jpg'
import './links.css'
import simpleCalculator from './assets/calclator.jpg'

const Nav = React.lazy(()=>import('../Components/Nav'))
const Footer = React.lazy(()=>import('../Components/Footer'))


function Projects() {
  return (
    <>
    <Suspense fallback={<h1>loading...</h1>}><Nav /></Suspense>
    <center style={{fontSize:'2rem',margin:'1rem 0',fontWeight:'800'}}>Projects</center>
    <section className='projects-container'>
     <div className='p-items'>
      <ProjectItems title={'background changer'} profile={bgChange} plink={'/backgroundChanger'} codelink={'/bg_code'} alternative={"background-changer"}/>
      <ProjectItems title={'calculator'} profile={simpleCalculator} plink={'/calculator'} codelink={'/calculator_code'} alternative={"calculator"}/>
     </div>
    </section>
    <Suspense fallback={<h1>loading....</h1>}><Footer /></Suspense>
    </>
  )
}


function ProjectItems({title,profile,plink,codelink,alternative}){
  return(
    <>
     <div className='projects'>
            <h1>{title}</h1>
            <img src={profile} alt={alternative} />
            <div className='pl'>
            <Link to={plink}>try it</Link>
            <Link to={codelink}>code</Link>
            </div>
      </div>
    </>
  )
}

export default Projects;