import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";


const JobCard = ({item}) => {
  return (
    <div className="bg-white rounded-md p-6 border-1 hover:shadow-md transition">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.company}</p>
        </div>
        <span className="text-sm text-white bg-green-600 px-2 py-1 rounded">
          {item.job_type}
        </span>
      </div>
      <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
        <FaMapMarkerAlt />
        <span>{item.job_location}</span>
      </div>
      <p className="text-sm text-gray-600">Experience: 3+ years</p>
      <p className="text-sm text-gray-600 mb-4">Salary: $8,000 - $10,000</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">Posted 2 days ago</span>
        <button className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default JobCard