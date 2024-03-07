// import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import './sass/home.scss'
import './sass/navbar.scss'
import Navbar from './components/Navbar.jsx'
import Home from '../pages/home.jsx'
import About from '../pages/about.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  
)
