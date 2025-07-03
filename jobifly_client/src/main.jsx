import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import JobContextProvider from './context/JobContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
