import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Navfloat from './components/Navfloat';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experiences />
    <Contact />

    <SocialLinks />
    <Navfloat />
    </div>

  );
}

export default App