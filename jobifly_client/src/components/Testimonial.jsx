import React from 'react'
import { Quote } from 'lucide-react';
import { assets } from '../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Testimonial() {
  return (
    <div className='container pt-20 pb-20'>
        <div className='flex justify-center'>
          <h1 className='text-3xl font-bold'>What Our Customers are Saying</h1>
        </div>

        <Swiper 
          className='text-center'
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className=''>
            <div className='flex flex-col items-center justify-center mt-14 space-y-6 0'>
              <Quote size={50} color={'#7b3306'}/>
              <p className='text-center w-8/12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloremque excepturi consequuntur laudantium omnis optio nihil laborum architecto magni error explicabo hic illum repellendus amet voluptatem, exercitationem placeat at corrupti incidunt totam. Tempora, officiis assumenda iusto ullam accusamus facere deleniti.</p>
              <div className='flex gap-5 items-center justify-center mt-4'> 

                <div className='w-14 h-14 rounded-full'> 
                  <img src={assets.testimonial} alt="" className='w-full h-full rounded-full'/>
                </div>

                <div className=''>
                  <h1 className='text-xl font-bold'>Deborah Adejuwan</h1>
                  <p>Project Manager</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className='flex flex-col items-center justify-center mt-14 space-y-6 '>
              <Quote size={50} color={'#7b3306'}/>
              <p className='text-center w-8/12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloremque excepturi consequuntur laudantium omnis optio nihil laborum architecto magni error explicabo hic illum repellendus amet voluptatem, exercitationem placeat at corrupti incidunt totam. Tempora, officiis assumenda iusto ullam accusamus facere deleniti.</p>
              <div className='flex gap-5 items-center justify-center mt-4'> 

                <div className='w-14 h-14 rounded-full'> 
                  <img src={assets.testimonial} alt="" className='w-full h-full rounded-full'/>
                </div>

                <div className=''>
                  <h1 className='text-xl font-bold'>Lawal Oluwatomisin</h1>
                  <p>Software Engineer</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

            <SwiperSlide className=''>
            <div className='flex flex-col items-center justify-center mt-14 space-y-6 '>
              <Quote size={50} color={'#7b3306'}/>
              <p className='text-center w-8/12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloremque excepturi consequuntur laudantium omnis optio nihil laborum architecto magni error explicabo hic illum repellendus amet voluptatem, exercitationem placeat at corrupti incidunt totam. Tempora, officiis assumenda iusto ullam accusamus facere deleniti.</p>
              <div className='flex gap-5 items-center justify-center mt-4'> 

                <div className='w-14 h-14 rounded-full'> 
                  <img src={assets.testimonial} alt="" className='w-full h-full rounded-full'/>
                </div>

                <div className=''>
                  <h1 className='text-xl font-bold'>Emmanuel Alade</h1>
                  <p>Devops Engineer</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=' pb-10'>
            <div className='flex flex-col items-center justify-center mt-14 space-y-6 '>
              <Quote size={50} color={'#7b3306'}/>
              <p className='text-center w-8/12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloremque excepturi consequuntur laudantium omnis optio nihil laborum architecto magni error explicabo hic illum repellendus amet voluptatem, exercitationem placeat at corrupti incidunt totam. Tempora, officiis assumenda iusto ullam accusamus facere deleniti.</p>
              <div className='flex gap-5 items-center justify-center mt-4'> 

                <div className='w-14 h-14 rounded-full'> 
                  <img src={assets.testimonial} alt="" className='w-full h-full rounded-full'/>
                </div>

                <div className=''>
                  <h1 className='text-xl font-bold'>Joshua Ogundiran</h1>
                  <p>Web Designer</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

        </Swiper>
    </div>
  )
}
