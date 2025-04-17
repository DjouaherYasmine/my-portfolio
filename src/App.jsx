import AboutMe from "./components/aboutme";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import React from "react";

function Section({ id, children }) {
  return (
    <section
      id={id}
      className="h-screen flex items-center justify-center text-4xl font-bold text-white bg-[#000319]"
    >
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Section id="contact">Contact</Section>
    </div>
  );
}

export default App;
