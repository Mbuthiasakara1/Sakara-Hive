import './Services.css'
import { useEffect } from 'react'
import Services_Data from '../assests/Services'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';


 function Services() {
    useEffect(()=>{
      document.title="Services | Sakara Hive"
    })


  return (
    <>
    <Navbar />
      <div className="services-main">
        <div className="services-title">
          <h1>My Services</h1>
        </div>
        <div className="services-container">
          {Services_Data.map((service, index) => {
            return (
              <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                  {/* <p>
                    Read More<HiArrowLongRight  className='arrow'/>
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Services