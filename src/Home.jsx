import React from 'react';
import helloImage from './images/hello.png';

const Home = () => {
  return (
    <div>
        <div className = "landing-page">
            <div className = "self-center pl-20">   
              <h1 className = "landing-text">Samantha Thompson</h1>
              <img src={helloImage} className = "hello-image animate-pulse"></img>
              <h2 className = "text-main text-3xl">Full Stack Software Developer</h2>
            </div>
            <span id= 'about'></span>
        </div> 
    </div>
  );
}

export default Home;
