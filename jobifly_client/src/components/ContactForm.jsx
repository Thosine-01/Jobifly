import React from 'react'
import {assets} from '../assets/assets'

const ContactForm = () => {
  return (
    <div>
      <section className="max-w-6xl container py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold">Love to hear from you</h2>
          <p className="text-lg text-gray-600 mb-6">Get in touch!</p>
          <form className="space-y-4">
            <input className="w-full border rounded p-3" placeholder="Your Name" />
            <input className="w-full border rounded p-3" placeholder="Enter your email" />
            <textarea className="w-full border rounded p-3" rows={5} placeholder="Message"></textarea>
            <div className="bg-green-600 text-white px-6 py-3 rounded w-full">Send Message</div>
          </form>
        </div>
        <div className="flex justify-center items-center w-full">
          <img src={assets.contact} alt="Contact Illustration" className="w-full" />
        </div>
      </section>
    </div>
  )
}

export default ContactForm