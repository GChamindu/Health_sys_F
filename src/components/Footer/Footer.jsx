import "./footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="f-up">
        <div className="f-left">
          <div className="f-logo">
            <div className="f-l-contains">
              <div>
                <h2 className="f-others">Healthcara</h2>
                 
              </div>
              <div>
                <Link to="tel:+94740307891" className="f-l">+94 74 0307 891</Link>
              </div>
              <div>
                <Link to="mailto:gavichamindu@gmail.com" className="f-l">
                  <span>gavichamindu@gmail.com</span>
                </Link>
              </div>
              <div>
                <span className="f-l-a">No: 108, W A D Ramanayake Mawatha, Colombo 2, Sri Lanka.</span>
              </div>
         
            </div>
          </div>
        </div>

        <div className="f-center">
          <h2 className="f-others">Other</h2>
          <Link to="/privacy-policy" className="f-link-up">Privacy and Policy</Link>
          <Link to="/contact"  className="f-link-up">Contact us</Link>
          <Link to="/feedback" className="f-link-up">Feedback</Link>
        </div>

        <div className="f-right">
          <h2 className="f-others">About</h2>
         
          <Link to="/about-healthcare" className="f-link-up">Healthcare</Link>
          <Link to="/services" className="f-link-up">Services</Link>
          <Link to="/partners " className="f-link-up">Partners</Link>
          <Link to="/careers" className="f-link-up">Careers</Link>
       
        </div>
      </div>

     
      <hr  className="hr-b"/>

      <div className="f-down">
       
        <div>
       


        <span className="f-l-b">@ gavishka chamindu </span>
        </div>

        <div className="footer-icons">
        <Link to=""  className="f-links">  <FaFacebookF className="f-icon" />   </Link>
        <Link className="f-links"><FaTwitter className="f-icon"/></Link>   
        <Link className="f-links"> <FaInstagramSquare className="f-icon"/></Link>
        <Link className="f-links"> <IoLogoWhatsapp className="f-icon" /> </Link>
        <Link className="f-links"> <FaLinkedin className="f-icon" /> </Link>

        </div>
    
      </div>
    </div>
  );
}
