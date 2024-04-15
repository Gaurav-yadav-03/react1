import React, { useState } from 'react'

function App() {
  var [a,b]=useState(69)
  return (
    <div className='w-full h-screen p-5  bg-slate-600'>
      <h1 >{a}</h1>
      <button onClick={()=>b(a-1)} className='px-3 py-1 bg-green-500 rounded-md text-xs '>decrease</button>
      <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-500 rounded-md text-xs ml-5'>increasae</button>
    </div>
  )
}

export default App