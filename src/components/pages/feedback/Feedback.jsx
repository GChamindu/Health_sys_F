import "./feedback.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Feedback() {
  

    function Logout(){

        localStorage.clear();
        
        navigate("/");
       // window.location.reload();

    }
    const navigate=useNavigate();



/*/for validation feedback page  */
const [fnError,setFnError] = useState(" ");
const [fnmError,setFnmError] = useState(" ");
const [fsError,setFsError] = useState(" ");
const [faError,setFaError] = useState(" ");

function validation(){

  const fn =document.getElementById("nid").value;
  const fnm = document.getElementById("nmid").value;
  const fs = document.getElementById("sid").value;
  const fa = document.getElementById("aid").value;

  if(!fn){
    setFnError("Please enter patient name !!")
   

  }
  else{
    setFnError("")
  }

  if(!fnm){
    setFnmError("Please enter your number !!")
  

  }
  else{
    setFnmError(" ")
  }
if(!fs){

  setFsError("Please enter subject !!")
  

}
else{
  setFsError("")
}
if(!fa){
  setFaError("Tell something ")
  
}
else{
  setFaError("")
}


if(fn && fnm && fs && fa){
  navigate("/home")
return true;
}



}

/*enter data to database */

const [name,setName]=useState("");
const [number,setNumber]=useState("");
const [services,setServices]=useState("");
const [feedback,setFeedback]=useState("");


 async function submitFeedback(){

    

    const formData = new FormData();
    formData.append('name',name);
    formData.append('number',number);
    formData.append('services',services);
    formData.append('feedback',feedback);


   let result=await fetch("http://localhost:8000/api/feedback",{
    method:'POST',
    body:formData


    });

    result.json().then((res) => {
      alert("Data is send");
    });



}








  return (
    <div className='centerpage'>
      <h1>Hello</h1>
      <form action="" onSubmit={validation}>
        <div className="fall">
        <div className="cname">
        <label className="flabel">Enter Patient name </label><br />

          
          <input type="text" className="user" id="nid"
          onChange={(e)=>setName(e.target.value)}/><br />
          {fnError && <span className="error-message">{fnError}</span>}
        </div>
        <div className="number">
          <label className="flabel">Number </label><br />
             <input type="text" className="user" id="nmid" 
             onChange={(e)=>setNumber(e.target.value)}/><br />
             {fnmError && <span className='error-message'>{fnmError}</span>}

        </div>
        
        <div className="servicesfeedback"></div>
        <label className="flabel">Docter name or Service </label><br />
        <input type="text" className="user" id="sid" 
        onChange={(e)=>setServices(e.target.value)}/><br />
        {fsError && <span className='error-message'>{fsError}</span>}
       
        <div className="message">
          <label >Tell us what do you think</label><br />
         <textarea className='user' id="aid" 
         onChange={(e)=>setFeedback(e.target.value)}></textarea><br />
         {faError && <span className='error-message'>{faError}</span>}         

        </div>

        <h1>Thank You </h1>









      <div className="logoutbtn">
        <input type="submit" value="Send" className="sendmessage" onClick={submitFeedback}/>
        <input type="button" value="Logout" onClick={Logout} className="lobtn" />
      </div>
    

      </div>
      </form>





      
    </div>
  )
}
