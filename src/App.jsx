import React from 'react';
import Navbar from './componets/navbar/Navbar';
import Footer from './componets/footer/Footer'; 
import Hero from './componets/hero/Hero';
import Portfolio from './componets/portfolio/Portfolio';
import About from './componets/about/About';
import Contact from './componets/contact/Contact';
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
