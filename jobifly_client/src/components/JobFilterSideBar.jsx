import React from 'react'

const JobFilterSideBar = () => {
  return (
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
            <select className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600">
            <option>Select Location</option>
            <option>Nigeria</option>
            <option>United Kingdom</option>
            <option>United State</option>
            </select>
        </div>

        {/* Date Posted */}
        <div>
            <label className="text-sm font-semibold block mb-2">Date Posted</label>
            <select className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-600">
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
                    <input type="checkbox" className="accent-amber-600" value={type}/>
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
            {["Intenship", "Entry level", "Mid level"].map((exp) => (
                <li key={exp}>
                <label className="inline-flex items-center space-x-2">
                    <input type="checkbox" className="accent-amber-600" value={exp}/>
                    <span>{exp}</span>
                </label>
                </li>
            ))}
            </ul>
        </div>

        {/* Salary Offered */}
        <div>
            <label className="text-sm font-semibold block mb-2">Salary Offered</label>
            <ul className="space-y-2 text-sm">
            {[
                "Under $500",
                "$5,000 - $10,000",
                "$10,000 - $15,000",
                "$15,000 - $20,000",
            ].map((salary) => (
                <li key={salary}>
                <label className="inline-flex items-center space-x-2">
                    <input type="checkbox" className="accent-amber-600" value={salary}/>
                    <span>{salary}</span>
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
                <div className="w-full bg-amber-700 text-white py-2 rounded hover:bg-green-700 transition">
                Save Job Alert
                </div>
            </div>
        </aside>
    </div>
  )
}

export default JobFilterSideBar