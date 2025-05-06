import React from 'react';
import './App.css'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Achievements from './components/Achievements/Achievements';
import Education from './components/Education/Education';

const App = ()=>{
return(
  <div className='App'>
    <Navbar/>
    <Hero/>
    <Skills/>
    <MyWork/>
    <Education/>
    <Achievements/>
     <Contact/> 
    <Footer/>
    
  </div>
)
}


export default App;
