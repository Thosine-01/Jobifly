import React, { useContext, useEffect, useState } from 'react'
import { jobs_data, Jobss } from '../assets/assets'
import JobCard from './JobCard'
import { JobContext } from '../context/JobContext'

function Jobs() {
//getting the data frome the context file
  const {Jobss} = useContext(JobContext)

  //storing the sliced data in a state variable
  const [latestJobs, setLatestJobs] = useState([])

  useEffect(() => {
    setLatestJobs(Jobss.slice(0,3))
  }, [])




  console.log(Jobss)
  return (
    <div className='container'>
        <div className='mb-20'>
        <div className='mt-20 mb-10'>
            <h1 className='text-2xl font-bold'>Latest <span className='text-amber-800'>Jobs</span></h1>
        </div>
        <div className='grid grid-cols-3 gap-10 '>
            {latestJobs.map((item, idx) => (
                <JobCard key={idx} id={item.id} client_country={item.client_country} client_city={item.client_city} category_group={item.category_group} title={item.title} skills={item.skills} label={item.label} project_budget_total={item.project_budget_total}/>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Jobs