import React, { useContext, useEffect, useState } from 'react'
import JobCard from './JobCard'
import {Jobss} from '../assets/assets'
import { JobContext } from '../context/JobContext';


const JobCardGrid = () => {
  const {data} = useContext(JobContext);
  //console.log(data)
  //const [filteredJobs, setFilteredJobs] = useState()

  /*useEffect(() => {
    setFilteredJobs(data.slice(0,10))
  },[])*/

  console.log(Jobss)

  return (
      <div className="grid md:grid-cols-2 gap-16">
      {Jobss.map((item, idx) => (
        <JobCard key={idx} Id={item.id} client_country={item.client_country} client_city={item.client_city} category_group={item.category_group} title={item.title} skills={item.skills} label={item.label} project_budget_total={item.project_budget_total}/>
      ))}


      {/*{
        filteredJobs.map((item, index) => (
          <JobCard key={index} item={item} />
        ))
      }*/}
    </div>
  )
}

export default JobCardGrid