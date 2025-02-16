import helloImage from '../assets/images/hello.png';

const Home = () => {
  return (
    <div>
        <div className = "landing-page">
            <div className = "self-center md:pl-20 pl-5">   
              <h1 className = "md:text-7xl text-5xl font-bold pb-2">Samantha Thompson</h1>
              <img src={helloImage} className = "hello-image animate-pulse" alt=""></img>
              <h2 className = "text-main text-3xl">Software Engineer & Technical Project Manager</h2>
            </div>
            <span id= 'home'></span>
        </div> 
    </div>
  );
}

export default Home;
