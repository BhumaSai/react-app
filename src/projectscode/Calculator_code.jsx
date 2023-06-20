import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import {  monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './code.css'
import {MdCopyAll} from 'react-icons/md'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useCode from './useCode';


function Calculator() {
    const code = `import React, { useState } from 'react'
    import './projects.css'
    
    function Calculator() {
      const [Ivalue,setIvalue] = useState('')
      
    const operation = (e) => {
      const calc = eval(Ivalue)
      setIvalue(calc)
    }  
    
    
      return (
        <>
        <section className='calculator-section'>
          <h2>simple calculator</h2>
          <div className='calculator-items'>
            <div className='calculator-wh'>
            <div className='input'>
              <input type="text" name="input" id="input" value={Ivalue} onChange={(e)=>setIvalue(e.target.value)} readOnly />
            </div>
            <div className='buttons'>
              <button onClick={()=>setIvalue(Ivalue+'1')} className='btn'>1</button>
              <button onClick={()=>setIvalue(Ivalue+'2')} className='btn'>2</button>
              <button onClick={()=>setIvalue(Ivalue+'3')} className='btn'>3</button>
              <button onClick={()=>setIvalue(Ivalue+'+')} className='btn'>+</button>
              <button onClick={()=>setIvalue(Ivalue+'4')} className='btn'>4</button>
              <button onClick={()=>setIvalue(Ivalue+'5')} className='btn'>5</button>
              <button onClick={()=>setIvalue(Ivalue+'6')} className='btn'>6</button>
              <button onClick={()=>setIvalue(Ivalue+'-')} className='btn'>-</button>
              <button onClick={()=>setIvalue(Ivalue+'7')} className='btn'>7</button>
              <button onClick={()=>setIvalue(Ivalue+'8')} className='btn'>8</button>
              <button onClick={()=>setIvalue(Ivalue+'9')} className='btn'>9</button>
              <button onClick={()=>setIvalue(Ivalue+'*')} className='btn'>x</button>
              <button onClick={()=>setIvalue(Ivalue+'0')} className='btn'>0</button>
              <button onClick={()=>setIvalue('')} className='btn'>clear</button>
              <button onClick={operation} className ='btn'>=</button>
              <button onClick={()=>setIvalue(Ivalue+'/')} className='btn'>/</button>
            </div>
            </div>
          </div>
        </section>
        </>
      )
    }
    
    export default Calculator`;


    const [copy,copied] = useCode()


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

export default Calculator