import React from 'react'
import { assets } from '../../assets/assets'    

const Loader = () => {
  return (
    <div>
        <div>
            <img src={assets.loader} alt='loader' className='w-40 h-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
    </div>
      
  )
}

export default Loader

  