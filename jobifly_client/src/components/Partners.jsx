import React from 'react'
import { assets } from '../assets/assets'

const Partners = () => {
  return (
    <div className='container pb-20'>
      <div>
        <h1 className='text-center font-bold text-3xl mb-10'>Trusted by 300+ companies</h1>
        <div className='flex justify-between items-center flex-wrap gap-10'>
          <img src={assets.googleLogo} alt='' className='img_width'/>
          <img src={assets.indeed} alt='' className='img_width'/>
          <img src={assets.upwork} alt='' className='img_width'/>
          <img src={assets.walmart} alt='' className='img_width'/>
          <img src={assets.slack} alt='' className='img_width'/>

        </div>
      </div>
    </div>
  )
}

export default Partners