import './App.css'
import {Routes, Route} from 'react-router-dom'
import PagesLayout from './layouts/PagesLayout'
import Home from './pages/Home'
import JobList from './pages/JobList' 
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Login from './pages/Login'
import Job from './pages/Job'
//import JobCardGrid from './components/JobCardGrid'  

function App() {


  return (
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
