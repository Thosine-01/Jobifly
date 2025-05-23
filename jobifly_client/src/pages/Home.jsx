import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Activities from '../components/Activities'
import Jobs from '../components/Jobs'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

const Home = () => {
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