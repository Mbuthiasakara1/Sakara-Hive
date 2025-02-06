


import Navbar from "../Components/Navbar";
import { LuArrowUpRight } from "react-icons/lu";
import "./Portfolio.css";
import mywork_data from "../assests/Work_data";
import { useEffect } from "react";
import Footer from "../Components/Footer";

function Portfolio() {
  useEffect(()=>{
    document.title="Portfolio | Sakara Hive"
  })
  return (
    <>
      <Navbar />
      <div className="mywork">
        <div className="mywork-title">
          <h1>My Latest Work</h1>
        </div>
        <div className="mywork-grid">
          {mywork_data.map((work, index) => (
            <div key={index} className="work-item">
              <img src={work.w_img} alt={work.w_name} />
              <h2>{work.w_name}</h2>
              <a href={work.github_link} className="github-btn">
                <p>
                  View in github <LuArrowUpRight />
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Portfolio;