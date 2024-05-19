import "./show.css";
import Footer from "../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Show({ email }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/adddoctors");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleBookClick = (item) => {
    navigate("/nm", { state: { data: item, email: email } });
  };
  console.warn("result", data);

  const [count, setCount] = useState(null);

  return (
    <>
      <div className="q-up">
        <div className="q-up-content">
          <div className="q-header">
            <h1 className="first-header">Select your </h1>
            <h1 className="header-2"> Doctor</h1>
          </div>
          <div className="q-span">
            <span className="span-one">
              It is a log established fact that a reader will be distracted by
              the readable
            </span>
            <span className="span-two">
              Content of a page when looking at its layout
            </span>
          </div>
        </div>
      </div>
      <br />
      <>
        <div className="all-hight">
          <div className="n-square">
            {data.map((item) => (
              <div className="s-contains" onClick={() => handleBookClick(item)}>
                <div className="t-title">
                  <div className="back-add">
                    <span className="animation-today">
                      {" "}
                      {item.today} {" "}
                    </span>
                  </div>

                  <div className="img-name">
                    <div>
                      {item.imagedata && (
                        <img
                          src={`data:image/jpeg;base64,${item.imagedata}`}
                          alt="Doctor"
                          className="n-dr-image"
                        />
                      )}{" "}
                    </div>
                  </div>

                  <div className="set_background">
                    <div className="center-div">
                      <span className="n-bold">{item.name}</span>
                    </div>
                  </div>
                  <div className="center-div">
                    <span className="n-bold">{item.specialists}</span>
                  </div>
                </div>

                <div className="n-appoinment">
                  <span className="bold_hospital">Reg </span>
                  <span className="normal-f">{item.regNo}</span> <br />
                  <span className="bold_hospital">Time/day :</span>
                  <span className="normal-f">{item.day}</span>
                  <br /> <span className="bold_hospital">Hospital :</span>{" "}
                  <span className="normal-f">{item.hospital}</span>
                  <div></div>
                </div>
              </div>
            ))}

            <div className="s-s">
              see more
              <BiSolidCaretRightCircle />
            </div>
          </div>
        </div>
      </>
    </>
  );
}
