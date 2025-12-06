//import React, {useState, useEffect, useContext} from 'react'
import Hero from '../components/Hero'
import Activities from '../components/Activities'
import Jobs from '../components/Jobs'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Brand from '../components/Brand'
import { JobContext } from '../context/JobContext'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Blog from '../components/Blog'

const Home = () => {
  //const { data } = useContext(JobContext);
  //console.log("API Data:", data);


  return (
    <>
      <Hero />
      <Brand />
      <Categories />
      <About />
      {/*<Activities />*/}
      <Jobs />
      <Testimonial />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home