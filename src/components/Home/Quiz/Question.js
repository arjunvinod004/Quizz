import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus,} from 'react-icons/ai'
function Question({title,info}) {
  const [showInfo,setShowInfo]=useState(false)
  return (
    <article className='question'>
      <header>
        <h4 style={{color:'white'}}>{title}</h4>
        <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
        
      </header>
      {showInfo && <p style={{color:'wheat'}}>{info}</p>}
    </article>
  )
}

export default Question
