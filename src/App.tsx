import React, {useState} from 'react';
import Home from './Home.jsx';
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
      <div className={Loading ? 'App overflow-hidden' : 'App'}>
        
        {/* <Loader Loading={Loading} /> */}
        {/* <Header /> */}
        {/* <Links /> */}
        {/* <AboutMe />
        <Projects />
        <Experience /> */}
        {/* <Contact />  */}
        {/* <Footer /> */}
        
      </div>
    <header>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <Home />

    <section id="about">
        <div className="content">
            <h2>About Me</h2>
            <p>Add your about me content here.</p>
        </div>
    </section>

    <section id="portfolio" className="parallax">
        <div className="content">
            <h2>Portfolio</h2>
        </div>
    </section>

    <section id="contact">
        <div className="content">
            <h2>Contact Me</h2>
        </div>
    </section>

    <footer>
        <p>&copy; <span>{getYear()}</span> Samantha Thompson</p>
    </footer>
    </div>
  );
}

export default App;
