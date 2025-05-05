import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'; 
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/' element={<> <Hero /> <Portfolio /> <About /> <Contact /> </>}></Route>
        <Route path='/portfolio' element={<> <Hero /> <Portfolio /> </> }></Route>
        <Route path='/about' element={<> <Hero /> <About /> </>}></Route>
        <Route path='/contact' element={<> <Hero /> <Contact /> </>}></Route>
      </Routes>
  
      <Footer />
    </>
  );
}
