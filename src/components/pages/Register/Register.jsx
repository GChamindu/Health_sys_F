import "./register.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  /*validate form */

  const [pnumber, setPNumber] = useState("");
  const [pswEr, setPswEr] = useState("");
  const [lnumerEr, setLnumberEr] = useState("");

  const [inNumber, setInNumber] = useState("");
  const [inPassword, setInPassword] = useState("");

  function validation(event) {
    event.preventDefault();

    const nmber = document.getElementById("nmb").value;
    const vname = document.getElementById("name").value;
    const lnumber = document.getElementById("nmb").value;

    if (!nmber) {
      setPNumber("The number field is required");
    } else {
      setPNumber("");
    }

    if (lnumber.length !== 10 && lnumber) {
      setLnumberEr("not vallied number");
    } else if (lnumber.length == 10) {
      setLnumberEr("");
    }

    if (!vname) {
      setPswEr("The password field is required");
    } else {
      setPswEr("");
    }

    /* data insert */

    if (nmber && vname && lnumber.length == 10) {
      register();
    }

    async function register() {
      alert(inPassword);

      const item = {
        dnumber: inNumber,
        dpassword: inPassword,
      };

      try {
        const response = await fetch("http://localhost:8000/api/register", {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const result = await response.json();
        console.warn("result", result);
        localStorage.setItem("user-info", result);
        navigate("/home");
      } catch {
        console.error("Error registering user:");
      }
    }
  }

  return (
    <div className="login">
      <div className="containlogin">
        <div className="loginleft">
          <img
            src="https://www.getappointment.net/assets/img/slide/doctor2.png"
            alt=""
            className="limage"
          />
        </div>
        <div className="loginright">
          <div className="alform">
            <div className="wel">
              <h3 className="welcom">WELCOME</h3>
              <p className="advise">
                Have an account
                <Link to="/login" className="have">
                  {" "}
                  Sign in
                </Link>
              </p>
            </div>
            <div className="fm">
              <form action="" onSubmit={validation}>
                <div>
                  <lble className="pswerd">Phone number</lble> <br />
                  {pnumber && <span className="error">{pnumber}</span>}
                  {lnumerEr && <span className="error">{lnumerEr}</span>}
                  <input
                    type="number"
                    className="number"
                    placeholder=""
                    id="nmb"
                    maxLength="10"
                    value={inNumber}
                    onChange={(e) => setInNumber(e.target.value)}
                  />
                </div>

                <div>
                  <lble className="pswerd">Password</lble>
                  <br />
                  {pswEr && <span className="error">{pswEr}</span>}
                  <input
                    type="password"
                    className="name"
                    placeholder=""
                    id="name"
                    value={inPassword}
                    onChange={(e) => setInPassword(e.target.value)}
                  />
                </div>

                <div>
                  <input type="submit" className="lbtn" value="Sign up" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
