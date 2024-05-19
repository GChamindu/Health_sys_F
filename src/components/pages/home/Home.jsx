import "./home.css";
import Banner from "../Banner/Banner";
import Doctor from "../Doctors/Doctor";
import Footer from "../../Footer/Footer";
import Hanimation from "../head/Hanimation";
import HomePage from "../homePage/HomePage";
import LogoPage from "../../../logopage/LogoPage";
import Nav from "../../Navbar/Nav";
import NewDocoter from "../Doctors/NewDocoter";
import NewFooter from "../../newFooter/NewFooter";
import Question from "../Question/Question";
import React, { useEffect, useState } from "react";
import Service from "../services/Service";
import Show from "../../../showList/Show";
import homeimage from "./homeimages/log.jpg";
import log2 from "./homeimages/log2.jpg";
import log3 from "./homeimages/log3.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const images = [
  {
    src: homeimage,
    alt: "Home Image",
    style: { width: '100%', height: 'auto' },
  },
  {
    src: log2,
    alt: "Slider Image 1",
    style: { width: '100%', height: 'auto' },
  },
  {
    src: log3,
    alt: "Slider Image 2",
    style: { width: '100%', height: 'auto' },
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);



  const location = useLocation();
  const userData = location.state && location.state.userData;
  const [email, setEmail] = useState(userData ? userData.email : "");
 

  useEffect(() => {
    if (userData) {
    
      setEmail(userData.email);
    }
  }, [userData]);













  return (

    <>
    <Nav email={email} />
    <div className="slideshow-container">
      <br /><br />
      <div className="slideshow-image">
      <img src={images[currentImage].src} alt={images[currentImage].alt} style={images[currentImage].style} />
      </div>

      <div className="right-side-icon">

             <Link to=""  className="right-links">  <FaFacebookF className="r-icon" />   </Link>
                    
            <br />
                <Link className="right-links"><FaTwitter className="r-icon"/></Link>   
            <br />
                                
            <Link className="right-links"> <FaInstagramSquare className="r-icon"/></Link>
              <br />
        
            <Link className="right-links"> <IoLogoWhatsapp className="r-icon" /> </Link>
              <br />


      </div>
     



    </div>












   
    <Hanimation/>
    <HomePage/>
    <Show   email={email}/>
    <Banner/>
    <Service/>
    <Question/>
    <NewFooter/>
    </>
  );
}
