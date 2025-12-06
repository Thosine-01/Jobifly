import React, { useEffect, useState } from 'react'
import {assets, nav_data} from '../assets/assets'
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [scroll, setScroll] = useState(false)
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0)
    }

    if (window.scrollY > 0) {
      //imeitly there is a scroll, the navbar disappears
      setShowNav(false)

      //thereafter after 1 second the navbar appears
      setTimeout(() => {
        setShowNav(true)
      }, 400);
    } else {
      setShowNav(true)
    }


    window.addEventListener('scroll', handleScroll)
  })
  return (
    <nav className={`shadow bg-white container fixed flex justify-between items-center h-20  z-30 top-0 left-0 w-full transition-all duration-500  ${scroll? 'bg-white z-50 box-shadow' : 'bg-transparent}'} ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
      <div className='flex items-center gap-3'>
          <img src={assets.logo} className='w-10 h-10'/>
          <h4 className='font-semibold'>Jobi<span className='text-amber-700'>Fly</span></h4>
      </div>

      <div className='flex gap-10 items-center'>
        <ul className='flex gap-10 font-semibold'>
          {nav_data.map((item) => (
              <li key={item.id}>
                  <Link to={item.link}>{item.title}</Link>
              </li>
          ))}
        </ul>
        <Link to={'/login'}><button className='nav-button px-5 py-1 border-1 border-amber-700 text-amber-700 hover:bg-gray-900 flex items-center gap-2 rounded-lg'><LogIn size={18}/>Sign In</button></Link>
      </div>


    </nav>
  )
}

export default Navbar