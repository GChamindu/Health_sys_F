import "./newd.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewDocoter() {
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


  const handleBookClick = (item) => {
    navigate("/nm", { state: { data: item } });
  };



  console.warn('result', data);
  return (
    <div className="allsq">
       {data.map((item) => ( 

      <div key={item.id}>
      <div className="br">
     <div className="square">

        <div className="sup">
        {item.imagedata && (
            <img src={`data:image/jpeg;base64,${item.imagedata}`} alt="Doctor" className=''/>
          )}        </div>

        <div className="sdown">
        <div className="user-attraction">
                <span className="today-animation" style={{ animation: "colorChange 5s infinite" }}>
                  {item.today}
                </span>
              </div>
            <div className="ddetails">
                <div className="dname">
                    <span><b>
                    {item.name} 
                    <br />
                    {item.specialists}
                         </b></span>
                </div>
                <div className="dtime">
                {item.day}
                </div>
            </div>
            <div className="book-more">
                <button className="book-d" onClick={() => handleBookClick(item)}>Book</button>
                
            </div>
        </div>

      
    </div>
    </div>
    </div>
       ))}
    </div>
  )
}
