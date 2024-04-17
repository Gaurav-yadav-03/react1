import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
 

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Gaurav-yadav-03')
    //     .then(response =>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center text-white mx-36 my-3 bg-gray-400 text-3xl p-4'>Github account:{data.followers}
    <img  className=''src={data.avatar_url} alt="Git-Picture" width="200"/>
    </div>
  )
}

export default Github

export const gitInfoLoader= async()=>{
    const response=await fetch('https://api.github.com/users/Gaurav-yadav-03')
    return response.json()

}