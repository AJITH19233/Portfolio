import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-black min-h-screen cursor-none md:cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}