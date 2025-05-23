import React from 'react'
import { assets, activities_data } from '../assets/assets'
import { ArrowRight } from 'lucide-react';


function Activities() {
  return (
    <div className='bg-amber-900 w-[100%] h-[50vh] py-40'>
      <div className='container flex text-black h-full items-center gap-10'>
        <div className='w-4/12  bg-amber-50 py-10 px-10 rounded-md'>
          <h4 className='mb-4 text-3xl font-bold'>Browse Popular Jobs</h4>
          <div className='space-x-5 '>
            <button className='activ_but'><ArrowRight /></button>
            <button className='active_but2'><ArrowRight /></button>
          </div>
        </div>
        <div className='w-8/12 flex gap-4'>
        {activities_data.map((item) => (
          <div className='bg-amber-50 py-10 px-6 rounded-md'>
            <h1 className='bg-amber-200 inline-block py-3 px-5 '>{item.icon}</h1>
            <h4 className='mt-5 font-bold'>{item.title}</h4>
            <p className='mt-2'>{item.text}</p>
          </div>
        ))}
        </div>
      
      </div>
    </div>
  )
}

export default Activities