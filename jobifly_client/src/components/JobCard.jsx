import React, {useState} from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
//import {assets} from '../assets/assets'
import { MapPin } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
import { Link } from 'react-router';
import { Heart } from 'lucide-react';

const JobCard = ({featuredJobs}) => {
  //console.log(client_country, client_city, title)
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden border-2 border-amber-600">
      <div className="flex justify-between p-4 border-b border-neutral-300">
        <img
          src={featuredJobs.logoUrl}
          alt={featuredJobs.company + " logo"}
          className="h-10 w-10 object-contain"
        />
        <button className="text-neutral-300 hover:text-nuetral-400 border-0 outline-0" onClick={toggleFavorite}>
            <Heart size={20} className={` ${isFavorite ? 'fill-red-500 hover:fill-red-600 ' : 'fill-transparent' }`}/>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{featuredJobs.title}</h3>
        <p className="text-sm text-gray-500">{featuredJobs.company}</p>
        <p className="text-sm text-gray-400 flex items-center mt-1 space-x-2">
          <span>📍 {featuredJobs.location}</span>
          <span>•</span>
          <span>{featuredJobs.postedDate}</span>
        </p>
        <div className="mt-3 flex gap-2">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
            {featuredJobs.jobType}
          </span>
          {featuredJobs.remote && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
              Remote
            </span>
          )}
        </div>
        <div className="mt-4 border-t border-neutral-300 pt-3">
          <p className="text-lg font-semibold text-gray-900">{featuredJobs.salaryRange}</p>
          <p className="text-sm text-gray-400 mt-1">
            {featuredJobs.daysLeft} days left to apply
          </p>
        </div>
      </div>
    </div>

  )
}

export default JobCard