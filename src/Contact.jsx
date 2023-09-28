import React from 'react';
import resumeIcon from './images/resume-icon.png';
import emailIcon from './images/email-icon.png';
import linkedinIcon from './images/linkedin-icon.png';

const Home = () => {
  return (
      <div className = "bg-mainlight p-20 mb-20 align-top">
          <div className = "text-center">   
            <h1 className = "text-5xl bold">Get in Touch</h1>
            <div className = "flex justify-center pt-3">
              <div className = "m-2">
                <a href="https://www.w3schools.com" target="_blank"><img src={resumeIcon} className = "icon"></img></a>
                <p>Resume</p>
              </div>
              <div className = "m-2">
                <a href="https://www.w3schools.com" target="_blank"><img src={emailIcon} className = "icon"></img></a>
                <p>Email</p>
              </div>
              <div className = "m-2">
                <a href="https://www.w3schools.com" target="_blank"><img src={linkedinIcon} className = "icon"></img></a>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
          <span id= 'contact'></span>
      </div> 
  );
}

export default Home;
