import React from 'react';
import Navbar from "./Navbar";
import Landing from "./Landing";
import Features from "./Features";
import Documentation from "./Documentation";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import CarLoanForm from "./CarLoanForm";
import EMICalculator from "./EMICalculator";

const Home = () => {
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
  );
};

export default Home;

