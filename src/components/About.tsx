import headshot from '../assets/images/headshot.jpg';
import wave from '../assets/images/wave.png';

const About = () => {
  return (
      <div className="mt-10 mb-10">
          <div id="about" className = "flex grid md:grid-cols-7 items-center items-end about-content"> 
            <div className = "col-span-3">
              <div className = "about-me-image">
                <img src={headshot} alt="Headshot of Samantha Thompson"></img>
              </div>
            </div>            
            <div className = "self-center md:m-2 md:col-span-4">
              <div className = "wave-container">
                <img src={wave} className="wave" alt=""></img>
              </div>
              <h1 className = "md:text-5xl text-4xl bold mb-5">About Me</h1>
              <p>
                Software Engineer & Techinical Project Manager
                <br></br><br></br>
                Working professionally as a software enginner for the past three years, I have had the privilege of contributing to a diverse range of projects. The rapid evolution of technology and its limitless applications continue to inspire me. I have led initiatives across various sectors, including healthcare, agriculture, and non-profit organizations. Outside of coding, I am passionate about reading and writing fantasy, as well as enjoying video and board games. It has always been my childhood dream to open a board game café!
              </p>
            </div>
          </div>
      </div> 
  );
}

export default About;
