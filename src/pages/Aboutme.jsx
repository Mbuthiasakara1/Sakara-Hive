
import { useEffect } from "react";
import Navbar from "../Components/Navbar"
import './Aboutme.css'
import AnimatedNumber from "../Components/Animated"
import Footer from "../Components/Footer";

const Aboutme = () => {
    useEffect(()=>{
        document.title="About | Malazi Kenya"
    })
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src="/icons/ryne.png" alt="icon" />
          </div>

          <div className="about-right">
            <div className="about-paragraph">
              <p>
                {" "}
                I am a highly skilled software engineer specializing in
                full-stack web development, with expertise in React.js, Python
                Flask, and SQL. I excel in designing and implementing seamless
                integrations between frontend and backend technologies,
                delivering robust, user-centric solutions that address
                real-world challenges.
              </p>
              <p>
                With a passion for building scalable applications, I focus on
                optimizing performance, securing systems, and managing databases
                for reliable functionality.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Javascript</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>React Js</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Python</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>SQL</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>UI/UX</p>
                <hr style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="about-achievements-container">
          <div className="about-achievement">
            <div className="about-styles">

              <AnimatedNumber
                targetValue={5}
                suffix="+"
                duration={3000}
              />
              <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-styles">
              <AnimatedNumber
                targetValue={10}
                suffix="+"
                duration={3000}
              />
              <p>Complete Projects</p>
            </div>
            <hr />
            <div className="about-styles">
              <AnimatedNumber
                targetValue={100}
                suffix="%"
                duration={3000}
               
              />
              <p>Efficiency</p>
            </div>
            <hr />
          </div>
        </div>
        <Footer/>
     
    </>
  );
}

export default Aboutme
