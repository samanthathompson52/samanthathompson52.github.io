import {useState, useEffect} from 'react';
import NavBar from './components/NavBar.tsx';
import Home from './components/Home.tsx';
import Contact from './components/Contact.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import './App.css';

function getYear() {
  return new Date().getFullYear();
}

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>    
      <div className={loading ? 'App overflow-hidden' : 'App'}></div>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-main focus:text-white">Skip to content</a>
      <NavBar />
      <main id="main-content">
      <Home />
      <Contact /> 
      <About /> 
      <Experience />
      <Projects />
      </main>

      <footer>
          <p>&copy; <span>{getYear()}</span> Samantha Thompson</p>
      </footer>
    </div>
  );
}

export default App;
