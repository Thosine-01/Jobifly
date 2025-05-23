import React from 'react'
import { FaList, FaTh } from "react-icons/fa";

const JobCategoryBar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">

      <p className="text-xl text-gray-600">Showing 1-10 of 50 Results</p>

      {/* View toggle and count */}
      <div className="flex items-center space-x-4">
        {/* Job Category Dropdown */}
        <div className="mb-4 sm:mb-0">
          <select className="border rounded px-3 py-2 w-64">
            <option>Choose Job Category</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded border hover:bg-gray-100">
            <FaTh className="text-gray-600" />
          </button>
          <button className="p-2 rounded border hover:bg-gray-100">
            <FaList className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCategoryBar