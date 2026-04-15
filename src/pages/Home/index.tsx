import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import landingStyles from "./index.module.less";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={`home-landing-inner ${landingStyles.landingStack}`}>
        <Hero />
        <Stats />
      </div>
      <About />
      <Portfolio />
      <Experience />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
