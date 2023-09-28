import React from 'react';
import headshot from './images/headshot.jpg';
import wave from './images/wave.png';

const Home = () => {
  return (
      <div>
          <div className = "flex grid grid-cols-7 justify-center content"> 
            <div className = "self-center m-2 pr-5 col-span-3">
              <div className = "about-me-image">
                <img src={headshot}></img>
              </div>
            </div>            
            <div className = "self-center m-2 col-span-4 shrink">
              <div className = "wave-container">
                <img src={wave} className="wave"></img>
              </div>
              <h1 className = "text-5xl bold mb-5">About Me</h1>
              <p>Neurobiology & Physiology graduate turned software developer.<br></br><br></br>Throughout my undergraduate education I found myself gaining new experiences in clinical, research, and academia areas of biology. During this, I realized how much of an impact technology can have on healthcare and research!
I discovered that I loved programming and began teaching myself everything I could! <br></br> <br></br>Since graduation, I dedicated my time to learning even more about the growing technologies of the world.
Now, I wish to create something of my own and learn even more aspects of technology.</p>
            </div>
          </div>
          <span id= 'about'></span>
      </div> 
  );
}

export default Home;
