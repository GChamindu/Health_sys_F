import "./doctor.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Doctor() {

  const [data,setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/adddoctors");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  console.warn('result', data);


  return (
    <div className='doctors'>
      
    <div className="showdoctors">
      
      {data.map((item) => (
        <div key={item.id}>
          {item.imagedata && (
            <img src={`data:image/jpeg;base64,${item.imagedata}`} alt="Doctor" className='dpic'/>
          )}
          <span className="tdy">{item.today}</span>
          <div className="dodetails">
            <span className='tit'>{item.name}</span>
            <div>
              <span className="tit">RegNo. </span><span>{item.regNo}</span>
            </div>
            <div>
              <span className='tit'>Specialist : </span>
              <span>{item.specialists}</span>
            </div>
            <div>
              <span className="tit">Hospital : </span> 
              <span>{item.hospital}</span>
            </div>
            <div>
              <span className="tit">About : </span>
              <span>{item.other}</span>
            </div>
            <div>
              <span className="tit">Date & Time : </span>
              <span>{item.day}</span>
            </div>
            <button >Appointment</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
