import React from 'react'
import { brand_names } from '../assets/assets'

const Brand = () => {
    console.log(brand_names);
  return (
    <div className='container'>
        <div className='mb-20 mt-28'>
            <div className='grid grid-cols-6 gap-7'>
                {brand_names.map((item, idx) => (
                    <div key={idx} className='flex justify-center items-center  box-shadow rounded-lg border border-neutral-300 hover:border-amber-500 hover:scale-105 transition-all duration-300 bg-white'>
                        <img src={item.logo} alt={item.name} className='w-24 h-24 object-contain'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Brand