import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Portfoliotext from './components/portfolio-text/Portfoliotext'
import About from './components/about/About'
import Skill from './components/skills/Skill'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Portfolio2 from './components/Portfolio3/Portfolio2'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Portfoliotext/>
      <About/>
      <Services/>
      <Skill/>
      {/* <Portfolio/> */}
      <Portfolio2/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App