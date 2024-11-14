import React, { useState } from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import About from './components/About';
import Mission from './components/Mission';
import Expertise from './components/Expertise';
import Review from './components/Review';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

const App = () => {


  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <Hero />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <ContactSection />
      <Footer />
      <ScrollTop />
    </main>
  )
}

export default App;