"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[46],{9046:function(t,n,e){e.r(n);var a=e(9439),l=(e(2791),e(9350)),s=e(4776),u=(e(4621),e(6856)),c=e(8029),o=e(9509),i=e(184);n.default=function(){var t="import React, { useState } from 'react'\n    import './projects.css'\n    \n    function Calculator() {\n      const [Ivalue,setIvalue] = useState('')\n      \n    const operation = (e) => {\n      const calc = eval(Ivalue)\n      setIvalue(calc)\n    }  \n    \n    \n      return (\n        <>\n        <section className='calculator-section'>\n          <h2>simple calculator</h2>\n          <div className='calculator-items'>\n            <div className='calculator-wh'>\n            <div className='input'>\n              <input type=\"text\" name=\"input\" id=\"input\" value={Ivalue} onChange={(e)=>setIvalue(e.target.value)} readOnly />\n            </div>\n            <div className='buttons'>\n              <button onClick={()=>setIvalue(Ivalue+'1')} className='btn'>1</button>\n              <button onClick={()=>setIvalue(Ivalue+'2')} className='btn'>2</button>\n              <button onClick={()=>setIvalue(Ivalue+'3')} className='btn'>3</button>\n              <button onClick={()=>setIvalue(Ivalue+'+')} className='btn'>+</button>\n              <button onClick={()=>setIvalue(Ivalue+'4')} className='btn'>4</button>\n              <button onClick={()=>setIvalue(Ivalue+'5')} className='btn'>5</button>\n              <button onClick={()=>setIvalue(Ivalue+'6')} className='btn'>6</button>\n              <button onClick={()=>setIvalue(Ivalue+'-')} className='btn'>-</button>\n              <button onClick={()=>setIvalue(Ivalue+'7')} className='btn'>7</button>\n              <button onClick={()=>setIvalue(Ivalue+'8')} className='btn'>8</button>\n              <button onClick={()=>setIvalue(Ivalue+'9')} className='btn'>9</button>\n              <button onClick={()=>setIvalue(Ivalue+'*')} className='btn'>x</button>\n              <button onClick={()=>setIvalue(Ivalue+'0')} className='btn'>0</button>\n              <button onClick={()=>setIvalue('')} className='btn'>clear</button>\n              <button onClick={operation} className ='btn'>=</button>\n              <button onClick={()=>setIvalue(Ivalue+'/')} className='btn'>/</button>\n            </div>\n            </div>\n          </div>\n        </section>\n        </>\n      )\n    }\n    \n    export default Calculator",n=(0,o.Z)(),e=(0,a.Z)(n,2),v=e[0],b=e[1];return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"code-section",children:(0,i.jsxs)("div",{className:"margin",children:[(0,i.jsxs)("div",{className:"text-btn",children:[(0,i.jsx)(c.CopyToClipboard,{text:t,children:(0,i.jsx)("button",{onClick:b,children:(0,i.jsx)(u.vlz,{color:"#fff"})})}),(0,i.jsx)("div",{className:"copy-text",children:v?(0,i.jsx)("span",{children:"copied"}):null})]}),(0,i.jsx)("div",{className:"center",children:(0,i.jsx)(l.Z,{language:"react",style:s.Z,children:t})})]})})})}},9509:function(t,n,e){var a=e(9439),l=e(2791);n.Z=function(){var t=(0,l.useState)(!1),n=(0,a.Z)(t,2),e=n[0],s=n[1];return[e,function(){s(!0),setTimeout((function(){s(!1)}),1e3)}]}},4621:function(){}}]);
//# sourceMappingURL=46.e9ae83d1.chunk.js.map