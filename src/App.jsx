import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import About from './About'
import Home from './Home'
import './App.css'
import Company from './Company';

const govtechData = {
  duration:"2020 - Present",
  companyCaseStudies:"GovTech Case Studies",
  casestudyDescription:"In case need a disclaimer",
  casestudyFilePath: "./case_studies/govtech.json"
}

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/govtech" exact element={<Company data={govtechData} />} /> 
        {/* <Route path="/livemore" exact element={<Company data={livemoreData}/>} />  */}
        {/* Add more routes for additional pages */}
    </Routes>  
    </Router>
    </>
  )
}

export default App
