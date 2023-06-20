import React, { Suspense } from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Zip from './Components/Zip';
import Home from './NavLinks/Home';
import About from './NavLinks/About'
const Projects = React.lazy(() => import('./NavLinks/Projects'))
const Backgroundchanger = React.lazy(()=> import('./projects/backgroundchanger'))
const BgCode = React.lazy(() => import('./projectscode/Bg_Code'))
const Calculator = React.lazy(()=> import('./projects/calculator'))
const CalculatorCode = React.lazy(() => import('./projectscode/Calculator_code'))
const Contact = React.lazy(() => import('./NavLinks/Contact'))







function App() {

  return (
  <>
  <Routes basename='/'>
    <Route path='/' element={<Home />} />
    <Route path='/react-app' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Suspense fallback={<Loader />}><Contact /></Suspense>} />
    <Route path='/projects' element={<Suspense fallback={<Loader />}><Projects /></Suspense>} />
    <Route path='/backgroundChanger' element={<Suspense fallback={<Loader />}><Backgroundchanger /></Suspense>} />
    <Route path='/bg_code' element={<Suspense fallback={<Loader />}><BgCode /></Suspense>} />
    <Route path='/calculator' element={<Suspense fallback={<Loader />}><Calculator /></Suspense>} />
    <Route path='/calculator_code' element={<Suspense fallback={<Loader />}><CalculatorCode /></Suspense>} />
    <Route path='/*' element={<Zip />} />
  </Routes>
  </>

  );
}
const Loader = ()=>{
  return(
    <>
    <div className='loader-section'>
      <div className='loader'>
      </div>
    </div>
    </>
  )
}



export default App;
