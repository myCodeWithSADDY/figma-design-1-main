import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/navbar/Home';
import AllTests from './components/navbar/AllTests';
import Subject from './components/navbar/Subject';
import PastPapers from './components/navbar/PastPapers';
import Notes from './components/navbar/Notes';
import Blogs from './components/navbar/Blogs';
import Contact from './components/navbar/Contact';

import HeroSection from './components/Hero';
import WrappedComponent from './components/WrappedComponent';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar - stays on top */}
      <Navbar />
      

     
          
            <Routes>
              <Route path="/" element={
                <>
                <HeroSection />
                <WrappedComponent/>
                </>
                } />
              <Route path="/home" element={<Home />} />
              <Route path="/all-tests" element={<AllTests />} />
              <Route path="/subject" element={<Subject />} />
              <Route path="/past-papers" element={<PastPapers />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
          <Footer/>
    </BrowserRouter>
  );
};

export default App;
