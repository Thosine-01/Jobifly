import './App.css'
import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import PagesLayout from './layouts/PagesLayout'
import Home from './pages/Home'
import JobList from './pages/JobList' 
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Login from './pages/Login'
import Job from './pages/Job'
import Loader from './components/loader/Loader'

//import JobCardGrid from './components/JobCardGrid'  

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
            setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    fakeDataFetch();
  }, []);


  return isLoading ? (
      <Loader /> 
    ): (
        <>
            <Routes>
              <Route path='/' element={<PagesLayout />}>
                <Route index element={<Home />} />  
                <Route path='/joblist' element={<JobList />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/joblist/:jobId' element={<Job />}/>
                
              </Route>
            </Routes>
        </>
      )

}

export default App
