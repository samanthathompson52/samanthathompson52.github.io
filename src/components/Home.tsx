import PmpBadge from './PmpBadge';

const Home = () => {
  return (
    <div>
      <div className="landing-page">
        <span id="home"></span>

        <div className="self-center md:pl-20 pl-6 z-10">
          {/* Title block */}
          <h1 className="md:text-7xl text-5xl font-bold pb-3">Samantha Thompson</h1>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-main text-3xl">Technical Project Manager</h2>
            <PmpBadge />
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-main text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#contact"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-main transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Home;
