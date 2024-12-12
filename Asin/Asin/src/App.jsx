import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Memberships from './Components/Memberships';
import Academy from './Components/Academy';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/about'  element={<Aboutus/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='/member' element={<Memberships/>}/>
        <Route path='/Academy' element={<Academy/>}/>
        <Route path='/contact' element={<Contactus/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
