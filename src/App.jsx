import React from 'react';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Documentation from "./components/Documentation"
import AboutUs from "./components/AboutUs"



function App() {
  

  return (
    <>
      <Navbar/>
      <Landing/>
      <Features/>
      <Documentation/>
      <AboutUs/>
    </>
  )
}

export default App;
