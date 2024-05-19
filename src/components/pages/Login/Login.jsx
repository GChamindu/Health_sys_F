import "./login.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/home")
        }
    },[])





    /*validate form */

    const [pnumber, setPNumber] = useState("");
    const [pswEr, setPswEr] = useState("");
    const[lnumerEr,setLnumberEr] = useState("");
    const [numberBorderColor, setNumberBorderColor] = useState("transparent");


function validation (event){
    event.preventDefault();

    const nmber = document.getElementById("nmb").value;
    const vname = document.getElementById("name").value;
    const lnumber =  document.getElementById("nmb").value;

    if(!nmber){
        setPNumber("The number field is required");
    }

    else{
       setPNumber("");
    }

    if(lnumber.length <0 ||  lnumber.length>10){
       setLnumberEr("not vallied number")
   
 
    }

    else{
       setLnumberEr("")
        
  
    }


    if(!vname){
        setPswEr("The password field is required");
    }
    else{
        setPswEr("");
    }

   
    


 




}





  return (
    <div className="login">
        <div className="containlogin">
            <div className="loginleft">
                <img src="https://www.getappointment.net/assets/img/slide/doctor2.png" alt="" className="limage" />
            </div>
            <div className="loginright">
                <div className="alform">
                    <div className="wel">
                <h3 className="welcom">WELCOME</h3>
                <p className="advise">
                    Don't have an account 
                    <Link to='/register' className="have" > Sign up</Link>
                </p>
                </div>
                <div className="fm">
                <form action="" onSubmit={validation}>
                    <div>
                    <lble className="pswerd">Phone number</lble> <br />
                    {pnumber && <span className="error">{pnumber}</span>}
                    {lnumerEr&& <span className="erro">{lnumerEr}</span>}
                    <input type="number" className="number" placeholder="" id="nmb"/>
                   </div>

                   <div>
                    <lble className="pswerd">Password</lble><br />
                    {pswEr && <span className="error">{pswEr}</span>}
                   <input type="password" className="name" placeholder="" id="name"/>


                   </div>

                   <div><input type="submit" className="lbtn" value="Sign in"  />
                   </div>

                </form>
                </div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}
