import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PagesLayout from './layouts/PagesLayout'
import Home from './pages/Home'
import JobList from './pages/JobList' 
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'  

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<PagesLayout />}>
            <Route index element={<Home />} />  
            <Route path='/joblist' element={<JobList />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
