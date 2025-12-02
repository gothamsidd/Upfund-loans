import React from 'react';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Documentation from "./components/Documentation";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact"
import CarLoanForm from "./components/CarLoanForm"
import EMICalculator from "./components/EMICalculator"



function App() {
  

  return (
    <>
      <Navbar/>
      <Landing/>
      <Features/>
      <Documentation/>
      <AboutUs/>
      <EMICalculator/>
      <CarLoanForm/>
      <Contact/>
    </>
  )
}

export default App;
