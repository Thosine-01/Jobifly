import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const PagesLayout = () => {
  return (
    <div>
        <Navbar />
        <div className=''>
            <Outlet />
        </div>
    </div>
  )
}

export default PagesLayout