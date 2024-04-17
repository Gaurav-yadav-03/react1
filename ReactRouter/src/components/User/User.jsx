import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {Userid}=useParams()
  return (
    <div className='bg-black text-white text-3xl text-center p-5'>User:{Userid}</div>
  )
}

export default User