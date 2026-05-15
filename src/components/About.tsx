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
                Technical Project Manager
                <br></br><br></br>
                With four years of professional experience delivering software across healthcare, agriculture, and non-profit sectors, I transitioned into Technical Project Management to lead projects end-to-end — from scoping and planning through stakeholder communication and launch. My engineering background gives me a rare advantage: I can translate between business goals and technical reality, accurately scope work, unblock developers, and hold delivery timelines without sacrificing quality. Outside of work, I am passionate about reading and writing fantasy, as well as enjoying video and board games.
              </p>
            </div>
          </div>
      </div> 
  );
}

export default About;
