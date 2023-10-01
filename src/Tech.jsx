import resumeIcon from './images/resume-icon.png';
import emailIcon from './images/email-icon.png';
import linkedinIcon from './images/linkedin-icon.png';

const Tech = () => {
  return (
      <div className = "bg-mainlight p-10 mb-20 align-top">
          <div className = "text-center">   
            <h1 className = "md:text-5xl text-4xl bold">Technology</h1>
            <div className = "flex justify-center pt-3">
              <div className = "m-2">
                <a href="https://www.w3schools.com" target="_blank"><img src={resumeIcon} className = "icon"></img></a>
              </div>
              <div className = "m-2">
                <a href="https://www.w3schools.com" target="_blank"><img src={emailIcon} className = "icon"></img></a>
              </div>
              <div className = "m-2">
                <a href="https://www.w3schools.com" target="_blank"><img src={linkedinIcon} className = "icon"></img></a>
              </div>
            </div>
          </div>
          <span id= 'tech'></span>
      </div> 
  );
}

export default Tech;
