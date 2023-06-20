import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import {  monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './code.css'
import {MdCopyAll} from 'react-icons/md'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useCode from './useCode';


function Bg_Code() {
    const code = `import React, { useState } from 'react'
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
    
    export default Backgroundchanger`;

const [copy,copied] =useCode()
 

  return (
    <>
    <div className='code-section'>
        <div className='margin'>
          <div className='text-btn'>
            <CopyToClipboard text={code}>
            <button onClick={copied}><MdCopyAll color='#fff'/></button>
            </CopyToClipboard>
            <div className='copy-text'>
            {copy?<span>copied</span>:null}
            </div>
          </div>
        <div className='center'>
            <SyntaxHighlighter language='react' style={monokai}>
                   {code}
            </SyntaxHighlighter>
        </div>
        </div>
    </div>
    </>
  )
}

export default Bg_Code