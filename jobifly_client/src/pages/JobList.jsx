import React, { useState } from 'react'
import JobHero from '../components/JobHero'
//import JobFilterSidebar from '../components/JobFilterSideBar'
//import JobCategoryBar from '../components/JobCategoryBar'
import JobCardsGrid from '../components/JobCardGrid'
import Footer from '../components/Footer'
import { FaList, FaTh } from "react-icons/fa";

const JobList = () => {
    const [jobType, setJobType] = useState([])
    const [jobCategory, setJobCategory]  = useState([])
    const [jobExperience, setJobExperience] = useState([])
    const [jobLocation, setJobLocation] = useState('')
    const [jobPosted, setJobPosted] = useState('')

    const ToggleJobType = (e) => {
        if (jobType.includes(e.target.value)) {
            setJobType(prev => prev.filter( item => item !== e.target.value))
        }
        else {
            setJobType(prev => [...prev, e.target.value])
        }
    }

    const ToggleCategory = (e) => {
        if (jobCategory.includes(e.target.value)) {
            setJobCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setJobCategory(prev => [...prev, e.target.value])
        }
    }

    const ToggleJobExperience = (e) => {
        if (jobExperience.includes(e.target.value)) {
            setJobExperience(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setJobExperience(prev => [...prev, e.target.value])
        } 
    }

    const SelectJobLocation = (e) => {
        setJobLocation(e.target.value)
    }

    const SelectJobPosted = (e) => {
        setJobPosted(e.target.value)
    }


    console.log('jobType :', jobType)
    console.log('jobTCategory :', jobCategory)
    console.log('jobExperince :', jobExperience)
    console.log('job location:', jobLocation)
    console.log('jobPosted: ', jobPosted)

    
  return (
    <div>
        <JobHero />
        <main className=" container px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-20 pt-20 pb-20">
            {/*<JobFilterSidebar />*/}
              <div className='w-full sm:w-[30%]'>
              <aside className="w-full lg:w-full bg-[#FFF7F4] p-6 space-y-6 rounded-md shadow-sm">
              {/* Search By Job Title */}
              <div>
                  <label className="text-sm font-semibold block mb-2">Search By Job Title</label>
                  <input
                  type="text"
                  placeholder="Enter Type Of job"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
              </div>

              {/* Search Location */}
              <div>
                  <label className="text-sm font-semibold block mb-2">Search Location</label>
                  <select className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600" onChange={SelectJobLocation}>
                  <option>Select Location</option>
                  <option>Nigeria</option>
                  <option>United Kingdom</option>
                  <option>United State</option>
                  </select>
              </div>

              {/* Date Posted */}
              <div>
                  <label className="text-sm font-semibold block mb-2">Date Posted</label>
                  <select className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600" onChange={SelectJobPosted}>
                  <option>Date Posted</option>
                  <option>1 week ago</option>
                  <option>2 weeks ago</option>
                  <option>1 month ago</option>
                  </select>
              </div>

              {/* Job Type */}
              <div>
                  <label className="text-sm font-semibold block mb-2">Job Type</label>
                  <ul className="space-y-2 text-sm">
                  {["Full Time", "Part Time", "Temporary", "Freelance"].map((type) => (
                      <li key={type}>
                      <label className="inline-flex items-center space-x-2">
                          <input type="checkbox" className="accent-amber-600" value={type} onChange={ToggleJobType}/>
                          <span>{type}</span>
                      </label>
                      </li>
                  ))}
                  </ul>
              </div>

              {/* Experience Label */}
              <div>
                  <label className="text-sm font-semibold block mb-2">Experience Label</label>
                  <ul className="space-y-2 text-sm">
                  {["Intenship", "Entry level", "Mid level", "Senior"].map((exp) => (
                      <li key={exp}>
                      <label className="inline-flex items-center space-x-2">
                          <input type="checkbox" className="accent-amber-600" value={exp} onChange={ToggleJobExperience}/>
                          <span>{exp}</span>
                      </label>
                      </li>
                  ))}
                  </ul>
              </div>

              {/* Salary Offered */}
              <div>
                  <label className="text-sm font-semibold block mb-2">Job Category</label>
                  <ul className="space-y-2 text-sm">
                  {[
                      "sofware Development",
                      "UI & UX",
                      "Backend Developer",
                      "Frontend Developer",
                  ].map((category) => (
                      <li key={category}>
                      <label className="inline-flex items-center space-x-2">
                          <input type="checkbox" className="accent-amber-600" value={category} onChange={ToggleCategory}/>
                          <span>{category}</span>
                      </label>
                      </li>
                  ))}
                  </ul>
              </div>

              {/* Find Job Button */}
              <div className="text-center">
                  <div className="w-full bg-[#213547] text-white py-2 rounded hover:bg-green-700 transition">
                  Find Job
                  </div>
              </div>
              </aside>

              <aside className="mt-12 w-full lg:w-full bg-[#FFF7F4] p-6 space-y-6 rounded-md shadow-sm">
                  {/* Search By Job Title */}
                  <div>
                      <label className="text-sm font-semibold block mb-2">Job Alert</label>
                      <input
                      type="text"
                      placeholder="Enter Type Of job"
                      className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                  </div>

                  {/* Job Category */}
                  <div>
                      <label className="text-sm font-semibold block mb-2">Email Frequency</label>
                      <select className="w-full border px-3 py-2 rounded">
                      <option>Choose a Category</option>
                      </select>
                  </div>

                  {/* Find Job Button */}
                  <div className="text-center">
                      <div className="w-full bg-[#213547] text-white py-2 rounded hover:bg-green-700 transition">
                      Save Job Alert
                      </div>
                  </div>
              </aside>
            </div>
            <div className="flex-1 ">
            {/*<JobCategoryBar />*/}
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
            <JobCardsGrid/>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default JobList