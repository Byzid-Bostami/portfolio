import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import Error from "./Pages/Error";
import MoreAboutMe from "./Pages/MoreAboutMe";
import Services from "./Pages/Services";
import Gfonts from './Pages/Gfonts';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';
import Dynamic from './Pages/Dynamic';


import { Routes, Route, useLocation } from 'react-router-dom';



function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:title" element={<Dynamic />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/MoreAboutMe" element={<MoreAboutMe />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Gfonts" element={<Gfonts />} />

        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
