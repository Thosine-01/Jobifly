import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import {assets} from '../assets/assets'
import { MapPin } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import { Link } from 'react-router';

const JobCard = ({Id, client_country, client_city, category_group, title, skills, label, project_budget_total}) => {
  //console.log(client_country, client_city, title)
  return (
    <Link to={`/joblist/${Id}`}>
    <div className="bg-white rounded-md p-6 border-2 border-amber-600 hover:shadow-md transition  w-[]">
            {/* Logo and Company */}
      <div className="flex items-center mb-4 gap-7 ">
        <div className='bg-gray-200 rounded-md p-3'>
          <img
            src={assets.upworklogo} // replace with actual logo path
            alt="Company Logo"
            className="w-10 h-10 "
          />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">Upwork Clients.</h3>
          <p className="text-[12px] text-gray-600 flex gap-2 items-center"><MapPin size={14}/>{client_country}, {client_city}</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <h2 className="text-xl font-bold text-gray-800 mb-3">{category_group}</h2>
      <p className='text-gray-500 mb-2'>{title}</p>

      {/* Skills */}

      <div className='space-x-3 space-y-3 mb-6'>
        <p className="border-amber-400 border-2 px-2 py-1 inline-block">Skills</p>
        <p className="border-blue-400 border-2 px-2 py-1 inline-block">HTML</p>
        <p className="border-emerald-400 border-2 px-2 py-1 inline-block">CSS</p>
        <p className="border-fuchsia-400 border-2 px-2 py-1 inline-block">NEXT</p>
      </div>
      

      


      {/* Salary and Button */}
      <div className="flex justify-between items-center">

        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-3'><CalendarClock size={16} color='#b75b06'/><p className="text-[13px] font-semibold text-gray-500">{label}</p></div>
          <div className='flex items-center gap-2'><BadgeDollarSign  size={16} color='#b75b06'/><p className="text-sm font-semibold text-gray-500">{project_budget_total}</p></div>
          
        </div>
        
        <button className="bg-[#213547] text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-600 transition">
          Apply Now

        </button>
      </div>
    </div>
    </Link>

  )
}

export default JobCard