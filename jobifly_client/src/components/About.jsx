import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className='gradient py-20 container'>
        <div className='flex gap-16'>
            <div className='w-5/12'><img src={assets.about_img} alt="" className='w-[450px] h-[500px]'/></div>
            <div className='w-7/12 flex-item'>
                <h1 className='text-3xl font-bold mb-8'>Why We Are Most Popular</h1>
                <p className='text-lg mb-8'>Whether you're an experienced professional or a fresh graduate eager to dive into the workforce, we have something for everyone. From tech wizards to marketing mavens, finance gurus to creative minds, our diverse range of listings caters to a variety of skills and interests.</p>
                <div className='space-x-32 mb-5'>
                    <span>DA <span>Quality Job</span></span>
                    <span>DA <span>Reach 100s contacts</span></span>
                </div>
                <div className='space-x-32'>
                    <span>DA <span>No Extra Charge</span></span>
                    <span>DA <span>Internation job</span></span>
                </div>
                <button className='mt-12 about_button'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default About