import React from 'react';
import link from './images/link-icon.png';
import github from './images/github-icon.png';

const Home = () => {
  return (
      <div>
          <div className = "content">  
              <h1 className = "text-5xl bold mb-5">Projects</h1>
              <div className = "project-card">
                <div className = "flex justify-between">
                  <h2 className = "text-main text-3xl bold">Discord Community Bot</h2>
                  <div className = "flex pr-5">
                    <img src={link} className = "h-7 pr-7"></img>
                    <img src={github} className = "h-7"></img>
                  </div>
                </div>
                <p className = "pt-5 pb-5">Created a custom discord bot that serves as a management and entertainment tool for over 300 people in a Twitch community. Features include automatic role assigment, queue system, custom welcome messages, and role assigment based upon user reactions.</p>
                <h3 className = "text-main text-lg">Tech Utilized: Python Discord API</h3>
              </div>
          </div>
          <span id= 'about'></span>
      </div> 
  );
}

export default Home;
