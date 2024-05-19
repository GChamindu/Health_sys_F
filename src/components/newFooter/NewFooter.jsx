import "./newFooter.css";
import img from "./uplogo.jpg";

//import img from "./3 9 (1).png";
import {
  GrFacebookOption,
  GrGooglePlus,
  GrInstagram,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";

export default function NewFooter() {
  return (
    <div className="footer">
      <div className="f-contain">
        <div className="footer-up">
          <div className="f-col1">
            <div className="footer-image">
              <img src={img} alt="" className="f-img" />
            </div>
            <div className="footer-up-title">
              <span className="title-span">Create your own QR </span>
              <br />

              <span className="title-span">Codes and boost your </span>
              <span className="title-span">business or idea </span>
            </div>
          </div>
          <div className="f-col">
            <div className="footer-header">
              <h3 className="footer-header">Services</h3>
            </div>
            <div className="header-span">
              <span className="header-title">Create QR</span>
            </div>
            <div className="header-span">
              <span className="header-title">Plans and Prices</span>
            </div>
          </div>
          <div className="f-col">
            <div className="footer-header">
              <h3 className="footer-header">Company</h3>
            </div>
            <div className="header-span">
              <span className="header-title">Terms & Conditions</span>
            </div>
            <div className="header-span">
              <span className="header-title">Privacy Policy</span>
            </div>
          </div>
          <div className="f-col">
            <div className="footer-header">
              <h3 className="footer-header">Help</h3>
            </div>
            <div className="header-span">
              <span className="header-title">Contact Us</span>
            </div>
            <div className="header-span">
              <span className="header-title">FAQ</span>
            </div>
          </div>

          <div className="f-col">
            <div className="footer-col-right-contains">
              <div className="set-footer-background">
                <div className="f-r-c-title">
                  <span className="right-title-span">Try our generator of</span>
                  <br />
                  <span className="right-title-span">
                    QR codes for 7 days
                  </span>{" "}
                  <br />
                  <span className="right-title-span">for free .</span>
                </div>
                <div className="f-r-c-button">
                  <button type="button" className="btn-btn-success">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="bottom-hr" />

        <div className="footer-bottom">
          <div className="f-b-left">
            <span className="footer-left-span">© Gavishka Chamindu</span>
          </div>
          <div className="f-b-right">
            <div className="set-icon-border">
              <div className="f-icon">
                <GrFacebookOption />
              </div>
            </div>
            <div className="set-icon-border">
              <div className="f-icon">
                <GrTwitter />
              </div>
            </div>
            <div className="set-icon-border">
              <div className="f-icon">
                <GrGooglePlus />
              </div>
            </div>
            <div className="set-icon-border">
              <div className="f-icon">
                <GrInstagram />
              </div>
            </div>
            <div className="set-icon-border">
              <div className="f-icon">
                <GrYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
