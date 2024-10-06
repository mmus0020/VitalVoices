import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove Router
import Home from './components/Home';
import About from './components/About';
import Problem from './components/Problem';
import Resources from './components/Resources';
import Chat from './components/Chat';
import Navbar from './components/Navbar'; // Ensure Navbar is imported correctly
import Footer from './components/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <Navbar /> {/* Use the correct Navbar component */}
      <ScrollToTop /> {/* Scroll to the top when navigating */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />  {/* Add the Footer here */}
    </>
  );
};

export default App;
