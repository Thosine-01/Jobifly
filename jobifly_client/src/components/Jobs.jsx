import React from 'react'
import { jobs_data } from '../assets/assets'

function Jobs() {
  return (
    <div className='container'>
        <div className='mb-20'>
        <div className='mt-20 mb-10'>
            <h1 className='text-2xl font-bold'>Latest <span className='text-amber-800'>Jobs</span></h1>
        </div>
        <div className='grid grid-cols-3 gap-10 job_container '>
            {jobs_data.map((item) => (
                <div className='box_shadow2 py-10 px-10 '>
                    <div className='flex gap-6'>
                        <img src={item.company_logo} alt="" className='w-10 h-10'/>
                        <div className='mb-4'>
                            <h4 className='font-bold'>{item.company}</h4>
                            <h4 className='font-bold'>{item.title}</h4>
                            <p className='text-gray-500'>{item.date}</p>
                        </div>
                    </div>
                    <h1 className='mb-4'>{item.text}</h1>
                    <button className='apply_button'>Appyh Here</button>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Jobs