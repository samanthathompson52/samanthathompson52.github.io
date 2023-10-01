import headshot from '../assets/images/headshot.jpg';
import wave from '../assets/images/wave.png';

const About = () => {
  return (
      <div className="mt-10 mb-10">
          <div id="about" className = "flex grid md:grid-cols-7 items-center items-end about-content"> 
            <div className = "col-span-3">
              <div className = "about-me-image">
                <img src={headshot}></img>
              </div>
            </div>            
            <div className = "self-center md:m-2 md:col-span-4">
              <div className = "wave-container">
                <img src={wave} className="wave"></img>
              </div>
              <h1 className = "md:text-5xl text-4xl bold mb-5">About Me</h1>
              <p>Neurobiology & Physiology graduate turned software developer.<br></br><br></br>Throughout my undergraduate education I found myself gaining new experiences in clinical, research, and academia areas of biology. During this, I realized how much of an impact technology can have on healthcare and research!
I discovered that I loved programming and began teaching myself everything I could! <br></br> <br></br>Since graduation, I dedicated my time to learning even more about the growing technologies of the world.
Now, I wish to create something of my own and learn even more aspects of technology.</p>
            </div>
          </div>
      </div> 
  );
}

export default About;
