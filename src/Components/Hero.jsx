import Footer from './Footer';
import './Hero.css'
const Hero = () => {
     const handleDownload = () => {
       const filePath = "/downloads/Resume.pdf";
       const link = document.createElement("a");
       link.href = filePath;
       link.download = "Resume.pdf"; // Suggested filename
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
     };
  return (
    <>
      <div className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span> {"i'm"} Ryne Mbuthia</span> , full stack developer based in
            Kenya
          </h1>
          <p>
            Highly skilled software developer,with the zeal to build responsive
            and scalable applications
          </p>
          <div className="hero-action">
            <div className="hero-connect">
              <a
                href="https://www.linkedin.com/in/ryne-mbuthia-0b3413219"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me
              </a>
            </div>
            <div className="hero-resume" onClick={handleDownload}>
              Resume
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Hero
