import React from 'react'
import { BadgeCheck } from 'lucide-react';
import { assets } from '../assets/assets';

const AboutSubHero = () => {
  return (
    <div className='container pb-24 pt-24'>
        <div className='flex items-center justify-between'>

            <div className='w-1/2'>
                <h1 className='text-3xl font-bold mb-4'>1000+ Jobs in Jobpath Find The One That Best Match You</h1>
                <p className='text-xl mb-6'>Whether you're an experienced professional or a fresh graduate eager to dive into the workforce, we have something for everyone. From tech wizards to marketing mavens</p>
                <div className='flex mb-4'>
                    <h1 className='flex gap-5 w-60'><BadgeCheck color='#fff'  fill='green'/>Quality of Job</h1>
                    <h1 className='flex gap-5'><BadgeCheck color='#fff'  fill='green'/>Reach 100s Contact</h1>
                </div>
                <div className='flex mb-6'> 
                    <h1 className='flex gap-5 w-60'><BadgeCheck color='#fff'  fill='green'/>No extra charge</h1>
                    <h1 className='flex gap-5'><BadgeCheck color='#fff'  fill='green'/>International Job</h1>
                </div>

                <div className="text-center inline-block">
                    <div className="w-full bg-green-600 text-white py-2 px-8 rounded hover:bg-green-700 transition">
                    Explore More
                    </div>
                </div>
            </div>

            <div className='w-1/2'>
                <img src={assets.aboutImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutSubHero