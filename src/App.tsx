import {useState} from 'react';
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

  const [Loading, setLoading] = useState(true);

  setTimeout(()=>{
      setLoading(false);
    }, 2000
  );
  return (
    <div>    
      <div className={Loading ? 'App overflow-hidden' : 'App'}></div>

      <NavBar />
      <Home />
      <Contact /> 
      <About /> 
      <Experience />
      <Projects />

      <footer>
          <p>&copy; <span>{getYear()}</span> Samantha Thompson</p>
      </footer>
    </div>
  );
}

export default App;
