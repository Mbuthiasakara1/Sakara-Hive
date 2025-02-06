

import "./Footer.css";


import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="profile">
          <div className="logo">
            <img src="/icons/logo.png" alt="logo" />
            <a href="">SakaraHive</a>
          </div>
          <p>{"Let's"} transform your ideas into impactful realities.</p>
        </div>

        <div className="link-container">
          <div className="information">
            <h3>Quick Links:</h3>
            <ul>
              <li>
                <a href="/"> Home</a>
              </li>
              <li>
                <a href="/aboutme">About me</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Porfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact us:</h3>
          <p>
            <MdOutlineEmail />
            <a href="mailto:mbuthiaryne@gmail.com">mbuthiaryne@gmail.com</a>
          </p>
          <p>
            <FiPhone />
            <a href="tel:+254 712 431055">+254 712 431055</a>
          </p>
          <p>
            <IoLocationOutline />
            Nairobi,Kenya.
          </p>
          <div className="socials">
            <a
              href="https://www.instagram.com/its_sakarra/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bx bxl-instagram"
                style={{ fontSize: "36px", color: "#E4405F" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ryne-mbuthia-0b3413219"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bx bxl-linkedin-square"
                style={{ fontSize: "36px", color: "#0077B5" }}
              ></i>
            </a>
            <a
              href="https://wa.me/0712431055"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bx bxl-whatsapp"
                style={{ fontSize: "36px", color: "#25D366" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}