import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { GitHub } from './components/GitHub';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useLoading } from './hooks/useLoading';
// import { CustomCursor } from "./components/ui/CustomCursor";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const isLoading = useLoading();

  return (
    <>
      {/* Removed Handwriting Loading Screen */}
      <div
        className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
      {/* <CustomCursor /> */}
      <Navbar />
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Education />
        <Skills />
        <Projects />
        <GitHub />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </>
  );
}

export default App;