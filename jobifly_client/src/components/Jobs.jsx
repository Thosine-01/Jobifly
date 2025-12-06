import React, {  useState } from 'react'
import { featured_jobs, categories } from '../assets/assets'
import JobCard from './JobCard'
import { JobContext } from '../context/JobContext'

function Jobs() {
  const featuredJobs = featured_jobs
  const jobCategories = categories
  const [activeCategory, setActiveCategory] = useState(jobCategories[0]);
   const filteredJobs = featuredJobs.filter((job) => job.category === activeCategory);

   const onCategoryChange= {setActiveCategory};
   const totalJobs = featuredJobs.length;
//getting the data frome the context file
  //const {Jobss} = useContext(JobContext)

  //storing the sliced data in a state variable
  //const [latestJobs, setLatestJobs] = useState([])

  {/*useEffect(() => {
    setLatestJobs(Jobss.slice(0,3))
  }, [])*/}




  //console.log(Jobss)
  return (
    <div className='container'>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 px-4 lg:px-0 mt-20 ">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recent Jobs</h2>
            <p className="mt-1 text-gray-500">
              {totalJobs} new opportunities posted today!
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(activeCategory)}
                className={
                  "px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium " +
                  (activeCategory === cat
                    ? "bg-amber-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300")
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((featuredJobs) => (
            <JobCard key={featuredJobs.id} featuredJobs={featuredJobs} />
          ))}
        </div>
    </div>
    
  )
}

export default Jobs