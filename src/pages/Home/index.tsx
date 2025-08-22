import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Interests />
      <Footer />
    </>
  );
};

export default Home;
