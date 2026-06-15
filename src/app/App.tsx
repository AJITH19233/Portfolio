import { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { DevOpsCloud } from './components/DevOpsCloud';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { CommandPalette } from './components/CommandPalette';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300" style={{ background: 'var(--bg)' }}>
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DevOpsCloud />
        <Certifications />
        <Contact />
        <Footer />
        <BackToTop />
        <CommandPalette />
      </div>
    </ThemeProvider>
  );
}