
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
         
          <span> {"i'm"} Ryne Mbuthia</span> , full stack developer based in Kenya
         
        </h1>
        <p>
          Highly skilled software developer,with the zeal to build responsive
          and scalable applications
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">Resume</div>
        </div>
      </div>
    </div>
  );
}

export default Hero
