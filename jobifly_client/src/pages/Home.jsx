import React, {useState, useEffect, useContext} from 'react'
import Hero from '../components/Hero'
import Activities from '../components/Activities'
import Jobs from '../components/Jobs'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import { JobContext } from '../context/JobContext'

const Home = () => {
  const { data } = useContext(JobContext);
  //console.log("API Data:", data);


  return (
    <>
      <Hero />
      <Activities />
      <Jobs />
      <About />
      <Testimonial />
      <Partners />
      <Footer />
    </>
  )
}

export default Home