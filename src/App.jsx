import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Links/Home';
import Project from './Links/Project';
import Contact from './Links/Contact';


function App() {
  return (
    <>
    <Routes basename="/">
      <Route path='/' element={<Home />} />
      <Route path='/react-app' element={<Home />} />
      <Route path='/project' element={<Project />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
