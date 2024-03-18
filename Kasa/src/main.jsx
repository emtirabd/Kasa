// import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import './sass/import.scss';
import Navbar from './components/Navbar.jsx'
import Home from '../pages/home.jsx'
import About from '../pages/about.jsx'
import Footer from './components/Footer.jsx'
import Error from '../pages/error.jsx'
import Apart from '../pages/apart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apart/:id" element={<Apart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
)
