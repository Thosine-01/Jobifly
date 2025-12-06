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
    <div className='container gradient pt-20 pb-20'>
        <div className='flex justify-between  text-gray-600 w-100% gap-8'>
            <div className='w-[70%]'>
                <div className='flex items-center gap-3 mb-4'>
                    <img src={assets.logo} className='w-10 h-10'/>
                    <h4 className='font-semibold text-2xl'>Jobi<span className='text-amber-800'>Fly</span></h4>
                </div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut non distinctio id? Repellendus id commodi similique vero alias fugit ut architecto minima saepe. Sint, molestias perferendis rerum deleniti voluptas commodi.</div>
            </div>

            <div className='w-[45%]'>
                <h1 className='mb-4 text-xl text-neutral-800'>Link</h1>
                <ul className='space-y-3'>
                    <li>Browse Jobs</li>
                    <li>Browse Candidates</li>
                    <li>Blog & News</li>
                    <li>FAQ Questions</li>
                    <li>Job Alert</li>
                </ul>
            </div>


            <div className='w-[45%]'>
                <h1 className='text-xl mb-4 text-neutral-800'>Support</h1>
                <ul className='space-y-3'>
                    <li>Privacy</li>
                    <li>Help</li>
                    <li>Terms</li>
                    <li>FAQ</li>
                    <li>Job Alert</li>
                </ul>
            </div>

            <div className='w-[45%]'>
                <h1 className='mb-6 text-xl text-neutral-800'>Contact Us</h1>
                <div className='space-y-3 mb-5'>
                    <h1 className='flex gap-3 items-center'><MapPin size={20}/>2715 San Jose,USA</h1>
                    <h1 className='flex gap-3 items-center'><Phone size={20}/>090 443 332 32 </h1>
                    <h1 className='flex gap-3 items-center'><Mail size={20}/>jobifly@gmail.com</h1>
                </div>
                <div>
                    <ul className='flex gap-5 mt-6'>
                        <li><Linkedin size={20}/></li>
                        <li><Facebook size={20}/></li>
                        <li><Instagram size={20}/></li>
                        <li><Youtube size={20}/></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer