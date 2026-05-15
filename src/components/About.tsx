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
              <p className="text-base">
                With over four years of experience delivering software solutions, I transitioned from software engineering into technical project management by taking ownership of project delivery, stakeholder communication, and cross-functional coordination. My background as a software developer gives me a strong technical foundation for translating business goals into actionable technical requirements.
                <br></br><br></br>

                In 2026, I founded <a href="https://finnly.net" target="_blank" rel="noopener noreferrer" className="text-main font-semibold hover:underline">Finnly</a> after identifying a gap in the pet care industry, where many facilities were underserved by generic software solutions. By working directly with dog trainers and pet care professionals, I led product discovery, requirements gathering, and solution development to create software tailored to their operational needs.
                <br></br><br></br>

                Outside of work, I enjoy reading and writing fantasy, along with video games and board games. You can also find me at renaissance fairs during the summers!
              </p>
            </div>
          </div>
      </div> 
  );
}

export default About;
