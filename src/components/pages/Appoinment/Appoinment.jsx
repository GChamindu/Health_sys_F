import "./appcenter.css";
import "./appoin.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const images = [
  " https://225.lk/echutil/images/slider_3",
  " https://225.lk/echutil/images/slider_1",
  "https://www.dfcc.lk/wp-content/uploads/2020/07/Digital-Channels-976-x-364.jpg",
  " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKmg_PHdr33PAxcUzdtPVdaID78wS4JPoqw&usqp=CAU",
];

export default function Appoinment() {
  const location = useLocation();

  const { data } = location.state;

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="all-content">
      <div className="left-content">
        <span className="d-profiles">Profilse</span>
        <div className="d-up">
          <div className="img-section">
            <img
              src="http://doctorwellsnaturalhealth.com/wp-content/uploads/2014/09/Dr-Wells-dreamstime_xl_13011820.jpg"
              alt=""
              className="dr-profile"
            />

            <br />
          </div>

          <div className="other-section">
            <br />
            {data.name}
            <b>Specialist</b>Carigiolist <br />
            <b>Reg No</b> 00121 <br />
            <b>Hospital</b>: matara <br />
            he is best for every somtion best or bad underlins hutta
          </div>
        </div>

        <div className="d-down">
          <br />
          <br />
          <br />
          <div className="error-limit">
            <h4 className="er-h">Note from hospital</h4>
            <span className="er-s">
              Appoinment limited for only 55 patient{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="center-content">
        <div className="contentin-center">
          <form action="" className="sendpay">
            <span className="d-profiles">
              Chennel your doctor to fill this{" "}
            </span>

            <div className="pname">
              <span className="eenter">Patient Name</span> <br />
              <input type="text" placeholder="" className="input-p" /> <br />
            </div>

            <div className="male-female">
              <input type="radio" name="gender" /> Male
              <input type="radio" name="gender" /> Female
            </div>

            <div className="pnumber">
              <br />
              <span className="eenter">Phone number</span> <br />
              <input
                type="text"
                placeholder="Ex:0715414180"
                className="input-pn"
              />
            </div>

            <div className="pemail">
              <br />
              <span className="eenter">Email</span> <br />
              <input
                type="text"
                placeholder="Ex:abc@gmail.com"
                className="input-p"
              />
            </div>

            <div className="parea">
              <br />
              <span className="eenter">Area</span> <br />
              <input
                type="text"
                placeholder="Enter closes area "
                className="input-p"
              />
            </div>

            <div className="apllybtn">
              <br />
              <span className="eenter">
                Already enter details are correct apply{" "}
              </span>{" "}
              <br />
              <input
                type="submit"
                placeholder=""
                className="submit-btn"
                value="Apply"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="right-content">
        <div className="r-content">
          <span className="d-profiles">payment details</span>
          <b>Amount of patient :</b> 25
          <br />
          <b>Doctor Charging </b> Rs . 25000 <br />
          <b>hospital Charging </b> RS.2500.00 <br />
          <b>Site charging </b> Rs. 300.00
        </div>
        <div className="ads-play">
          <div className="slideshow-image">
            <img src={images[currentImage]} alt="Slideshow" />
          </div>
        </div>
      </div>
    </div>
  );
}
