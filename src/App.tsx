import {useState} from 'react';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Tech from './Tech.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
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
      {/* <Tech />  */}
      <Projects />

      <footer>
          <p>&copy; <span>{getYear()}</span> Samantha Thompson</p>
      </footer>
    </div>
  );
}

export default App;
