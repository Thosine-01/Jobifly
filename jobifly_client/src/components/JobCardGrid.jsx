import React from 'react'
import JobCard from './JobCard'
import {assets, jobs_data_list} from '../assets/assets'

const JobCardGrid = () => {
  return (
        <div className="grid md:grid-cols-2 gap-6">
      {jobs_data_list.map((item, idx) => (
        <JobCard key={idx} item={item}/>
      ))}
    </div>
  )
}

export default JobCardGrid