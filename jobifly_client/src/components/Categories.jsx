import React from 'react'
import { category } from '../assets/assets'

const Categories = () => {
  return (
    <div className='container'>
      <div className=' mb-20 mt-3'> 
        <h2 className='text-4xl font-bold'>Browse by category</h2>
        <div className='flex justify-between items-center mt-6 mb-16'>
          <p className='w-8/12'>Find the type of work you need, clearly defined and ready to start. Work begins as soon as you purchase and provide requirements.</p>
          <button className='4/12 border-2 py-2 px-5 rounded-lg border-neutral-300 hover:border-amber-500 '>Browse All</button>
        </div>
        <div className='grid grid-cols-4 gap-7'>
          {category.map((item) => (
            <div key={item.id} className='border border-neutral-300 hover:border-amber-500 px-6 py-10 rounded-lg flex flex-col justify-center items-center gap-4 hover:scale-105 transition-all duration-300'>
              <img src={item.icon} alt={item.title} />
              <h3 className='text-2xl font-medium text-center'>{item.title}</h3>
              <p className='text-sm text-neutral-400'>{item.vacancy} Availble Vacancies</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories