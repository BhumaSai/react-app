import React, { Suspense, useState } from 'react'
import './links.css'

const Nav = React.lazy(()=>import('../Components/Nav'))
const Footer = React.lazy(()=>import('../Components/Footer'))

function Contact() {

  const [input,setinput] = useState({
    name:'',
    email:'',
    number:'',
    text:''
  })

  const inputreset =(e) => {
    e.preventDefault();
    setinput({
      name:'',
      email:'',
      number:'',
      text:''
    })
  }

  return (
    <>
    <Suspense fallback={<h1>loading...</h1>}><Nav /></Suspense>
    <div className='contact-section'>
      <div className='contact'>
          <h1>contact</h1>
      <form className='form'>
        <input type="text" name="name" id="in-name" value={input.name}  onChange={(e) => setinput({...input,name:e.target.value})} autoComplete='on' placeholder='enter  your name'  />
        <input type="email" name="email" id="in-email" value={input.email}  onChange={(e) => setinput({...input,email:e.target.value})} autoComplete='on' placeholder='@gmail.com' />
        <input type="tel" name="tel" id="in-tel" value={input.number} onChange={(e) => setinput({...input,number:e.target.value})} placeholder='enter you phone' autoComplete='off'/>
        <textarea name="text" id="des" cols="30" rows="10" value={input.text} onChange={(e) => setinput({...input,text:e.target.value})} autoComplete='off' placeholder='comment.....'/>
      </form>
      <button onClick={inputreset}>submit</button>
      </div>
    </div>
    <Suspense fallback={<h1>loading....</h1>}><Footer /></Suspense>
    </>
  )
}

export default Contact;