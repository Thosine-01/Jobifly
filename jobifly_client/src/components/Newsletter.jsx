import React from 'react'

const Newsletter = () => {
  return (
    <div className='container'>
        <div className='bg-amber-700 h-64 w-full rounded-br-4xl rounded-tl-4xl mb-20 mt-10 mt-40'>
            <div className='text-white w-[75%] h-full mx-auto flex flex-col justify-center'>
                <h2 className='text-4xl'><span className='text-2xl'>Sign up today to get</span> Latest Jobs</h2>
                <div className='flex gap-3 w-full relative mt-6'>
                     <input type="text" placeholder='Enter Your Email' className='focus bg-white rounded-md w-12/12 outline-0 h-14 text-amber-900 pl-3'/>
                    <div className='bg-amber-700 text-amber-50 px-5 py-1.5 m-[10px] rounded-md absolute right-3'>Subscribe</div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Newsletter