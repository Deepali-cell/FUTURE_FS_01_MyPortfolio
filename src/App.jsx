import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RecentCase from "./components/RecentCase";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <RecentCase />
      <Testimonials />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
