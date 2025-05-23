import React from 'react'
import JobHero from '../components/JobHero'
import JobFilterSidebar from '../components/JobFilterSideBar'
import JobCategoryBar from '../components/JobCategoryBar'
import JobCardsGrid from '../components/JobCardGrid'
import Footer from '../components/Footer'

const JobList = () => {
  return (
    <div>
        <JobHero />
        <main className=" container px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 pt-20 pb-20">
            <JobFilterSidebar />
            <div className="flex-1 ">
            <JobCategoryBar />
            <JobCardsGrid/>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default JobList