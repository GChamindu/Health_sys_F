import "./logopage.css";
import namelogo from "./limages/uplogo.jpg";
import title from "./limages/name.png";

export default function LogoPage() {
  return (
    <div className="logo-up">
        <div className="l-logo">
            <img src={namelogo} alt="" className="img-l" />
        </div>
        <div className="r-logo">
            <img src={title} alt="" className="img-r" />
        </div>
     
      
    </div>
  )
}
