import React from 'react'
import Header from './components/Header/Header'
import Foot from './components/Foot/Foot'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Foot/>
   
    
    </>
  )
}

export default Layout