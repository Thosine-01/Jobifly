import React from 'react'
import {assets, jobifly_howto_data} from '../assets/assets'

const AboutWork = () => {
  return (
    <div className='container'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>How Jobifly Works</h1>
            <div className='flex gap-6 mt-10'>
                {jobifly_howto_data.map((item, index) => (
                    <div className='bg-[#FFF7F4] rounded-md flex flex-col items-center space-y-6 py-10 px-10'>
                        <div className='bg-[#fff] py-5 px-5 rounded-md'><img src={item.Image} alt="" className='w-14 h-14'/></div>
                        <h1 className='font-bold text-2xl'>{item.title}</h1>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AboutWork