import React from 'react'
import {assets, nav_data} from '../assets/assets'
import { LogIn } from 'lucide-react';

function Navbar() {
  return (
    <nav className='container box_shadow flex justify-between items-center h-20 relative z-30'>
      <div className='flex items-center gap-3'>
          <img src={assets.logo} className='w-10 h-10'/>
          <h4 className='font-semibold'>Jobi<span className='text-amber-700'>Fly</span></h4>
      </div>

      <div className='flex gap-10 items-center'>
        <ul className='flex gap-10 font-semibold'>
          {nav_data.map((item) => (
              <li key={item.id}>
                  <a href="#">{item.title}</a>
              </li>
          ))}
        </ul>
        <button className='px-5 border-1 border-amber-700 text-amber-700 hover:bg-gray-900 flex items-center gap-2'><LogIn size={18}/>Sign In</button>
      </div>


    </nav>
  )
}

export default Navbar