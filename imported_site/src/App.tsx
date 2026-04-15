/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <section className="h-screen snap-start">
          <Hero />
        </section>
        <section className="h-screen snap-start">
          <About />
        </section>
        <section className="h-screen snap-start">
          <Experience />
        </section>
        <section className="h-screen snap-start">
          <Portfolio />
        </section>
        <section className="h-screen snap-start">
          <Skills />
        </section>
        <section className="h-screen snap-start">
          <Interests />
        </section>
        <section className="h-screen snap-start">
          <CTA />
        </section>
      </main>
    </div>
  );
}

