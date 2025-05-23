import React from 'react'
import ContactHero from '../components/ContactHero'
import {assets, contact_data} from '../assets/assets'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <section className="container max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {contact_data.map((item, index) => (
          <div key={index} className="border p-6 rounded-md shadow-sm text-center bg-[#FFF7F4] align-middle place-items-center space-y-5">
            <div className="text-3xl mb-2 bg-white py-3 px-5 rounded-md">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm whitespace-pre-line">{item.text}</p>
          </div>
        ))}
      </section>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default ContactPage