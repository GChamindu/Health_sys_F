import Nav from "../../Navbar/Nav";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

import  "./myAppoinment.css";

export default function MyAppointment() {
  const location = useLocation();
  const userData = location.state && location.state.userData;
  const [email, setEmail] = useState(userData ? userData.email : "");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userData) {
      setEmail(userData.email);

      // Make an API request to your backend to fetch appointments
      axios
        .get('http://localhost:8000/api/allData', {
          params: { email: email } // Pass email as a query parameter
        })
        .then((response) => {
          setAppointments(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [userData, email]);


const navigate =useNavigate();
  function go(){
  navigate(-1)  ;
  }
  return (


<>
<button type="button" className="btn btn-outline-success"

style={{ padding: "10px", margin: "10px" }}

onClick={go}
> <IoIosArrowBack />Back</button>

<br /><br />
<div className="q-up">
        <div className="q-up-content">
          <div className="q-header">
            <h1 className="first-header">Your </h1>
            <h1 className="header-2">Appointments </h1>
          </div>
          <div className="q-span">
            <span className="span-one">
              It is a log established fact that a reader will be distracted by
              the readable
            </span>
            <span className="span-two">
              Content of a page when looking at its layout {email}
            </span>
          </div>
        </div>
      </div>










    <div className="my_ap">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Appointment Number</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="5">Not Found Any Appointments</td>
            </tr>
          ) : appointments.length === 0 ? (
            <tr>
              <td colSpan="5">No appointments found</td>
            </tr>
          ) : (
            appointments.map((appointment, index) => (
              <tr key={index}>
               
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.patient}</td>
                <td>{appointment.appointmentNumber}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.date}</td>
              
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}
