import React from 'react'
import {assets} from '../assets/assets'

function Hero() {
  return (
    <div className='hero_background w-100% h-[90vh] ' >
        <div className='container flex justify-between h-full'>
            <div className='flex_item h-full'>
                <h1 className='flex_text text-5xl font-bold'>Find Your Perfect Dream Job With <span className='text-amber-700'>JobiFly</span></h1>
                <p className=''>Looking for a new job can be both exciting and daunting. Navigating the job market involves exploring various avenues, including online job boards.</p>
                <div className='hero_search flex gap-6 justify-between bg-amber-900 rounded-md'>
                  
                    <input type="text" placeholder='Enter Job Type' className='focus bg-white rounded-md w-5/12 outline-0 h-10 '/>
                 
                 
                    <select name="" id="" placeholder="Select Location" className='bg-white rounded-md w-5/12 outline-0 pl-6'>    
                      <option value="volvo">Select Location</option>
                      <option value="saab">Lagos</option>
                      <option value="opel">Abuja</option>
                      <option value="audi">Remote</option>
                    </select>
             
                  <button className='bg-amber-700 text-amber-900 p-2 rounded-md w-2/12'>Search</button>
                </div>
            </div>
            <div className='flexitem'>
                <img src={assets.hero_img} alt=""  className='w-[700px] h-[450px]'/>
            </div>
        </div>
    </div>
  )
}

export default Hero