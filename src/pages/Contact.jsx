import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import "./Contact.css";
import { LocationOn, Mail, Call} from "@mui/icons-material";
import Footer from "../Components/Footer";
import Contactform from "../Components/Contactform";


function Contact() {
  useEffect(()=>{
    document.title="Contact | Sakara Hive"
  })
  
  return (
    <>
      <Navbar />
      <div className="contact-main">
        <div className="contact-title">
          <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>{`Let's Chat`}</h1>
            <p className="big-sparkle">
              Tell me about your project .Lets create something together{" "}
              <span style={{ fontSize: "1.5em" }}>✨</span>
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <LocationOn />
                <p>
                  <span className="contact-d">Nairobi,Kenya</span>
                </p>
              </div>
              <div className="contact-detail">
                <Mail />
                <p>
                  <span className="contact-d">mbuthiaryne@gmail.com</span>
                </p>
              </div>
              <div className="contact-detail">
                <Call />
                <p>
                  <span className="contact-d">+254 712 431055</span>
                </p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <Contactform />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
