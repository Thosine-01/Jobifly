import React from 'react'
import {assets} from '../assets/assets'
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';


const Footer = () => {
  return (
    <div className='container bg-amber-900 pt-20 pb-20'>
        <div className='flex justify-between  text-amber-50 w-100% gap-8'>
            <div className='w-[50%]'>
                <div className='flex items-center gap-3 mb-4'>
                    <img src={assets.logo_white} className='w-10 h-10'/>
                    <h4 className='font-semibold text-2xl'>Jobi<span className='text-amber-200'>Fly</span></h4>
                </div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut non distinctio id? Repellendus id commodi similique vero alias fugit ut architecto minima saepe. Sint, molestias perferendis rerum deleniti voluptas commodi.</div>
            </div>

            <div className='w-[30%]'>
                <h1 className='mb-4 text-xl'>Link</h1>
                <ul className='space-y-3'>
                    <li>Browse Jobs</li>
                    <li>Browse Candidates</li>
                    <li>Blog & News</li>
                    <li>FAQ Questions</li>
                    <li>Job Alert</li>
                </ul>
            </div>

            <div className='w-[45%]'>
                <h1 className='mb-4 text-xl'>Contact Us</h1>
                <div className='space-y-3 mb-5'>
                    <h1 className='flex gap-3 items-center'><MapPin size={20}/>2715 Ash Dr. San Jose,USA</h1>
                    <h1 className='flex gap-3 items-center'><Phone size={20}/>090 443 332 32 </h1>
                    <h1 className='flex gap-3 items-center'><Mail size={20}/>jobifly@gmail.com</h1>
                </div>
                <div>
                    <h1 className='text-xl'>Social Links</h1>
                    <ul className='flex gap-5 mt-4'>
                        <li><Linkedin size={20}/></li>
                        <li><Facebook size={20}/></li>
                        <li><Instagram size={20}/></li>
                        <li><Youtube size={20}/></li>
                    </ul>
                    
                </div>
            </div>
            <div className='w-[45%]'>
                <h1 className='text-xl'>Subscribe to Our Newslater</h1>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, possimus ab aliquid nam!</p>
                <div className='flex gap-3 w-full relative mt-6'>
                    <input type="text" placeholder='Enter Your Email' className='focus bg-white rounded-md w-12/12 outline-0 h-10 text-amber-900 pl-3'/>
                    <div className='bg-amber-700 text-amber-50 px-2 py-1.5 mt-0.5 rounded-md absolute right-3'>Subscribe</div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Footer