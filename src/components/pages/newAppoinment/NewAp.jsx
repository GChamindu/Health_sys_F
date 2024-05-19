import "react-toastify/dist/ReactToastify.css";
import "./n-centers.css";
import "./n-rights.css";
import "./newap.css";
import CustomAlert from "../customAlert/CustomAlert";
import Footer from "../../Footer/Footer";
import Nav from "../../Navbar/Nav";
import NewFooter from "../../newFooter/NewFooter";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { BiSolidCaretRightCircle } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function NewAp() {
  const navigate = useNavigate();

  /*to create  send email option */

  /* const totalCost = document.querySelector(".cost-total").textContent;

  const numberOfPatients = document.querySelector(".p-numbers").textContent;

*/

  /* validations 



*/

  const [spn, setSpn] = useState("");
  const [sem, setSem] = useState("");
  const [snumber, Setsnumber] = useState("");
  const [snicc, setSnicc] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [niccError, setNiccError] = useState("");
  const [length, setLength] = useState("");

  const [patientCount, setPatientCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
     // alert(data.name);
      try {
        const response = await axios.post(
          "http://localhost:8000/api/numberOfPatient",
          {
            doctor: data.name,
          }
        );

        if (response.status === 200) {
          const count = response.data;
          setPatientCount(count);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  function go() {
    navigate(-1);
  }

  function Validate() {
    const pn = document.getElementById("i-name").value;
    const em = document.getElementById("i-email").value;
    const number = document.getElementById("i-number").value;
    const nicc = document.getElementById("i-id").value;

    if (!pn) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (!em) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    if (!number) {
      setPhoneNumberError("Phone Number is required");
    } else {
      setPhoneNumberError("");
    }

    if (!nicc) {
      setNiccError("NIC Number is required");
    } else {
      setNiccError("");
    }

    if (number.length < 10) {
      setLength("Not valid number");
    } else {
      setLength("");
    }

    if (pn && em && number && nicc) {
      Alert();

      const sendname = document.getElementById("i-name").value;
      const sendid = document.getElementById("o-id").textContent;
      const sendphoneNumber = document.getElementById("o-number").textContent;
      const sendemail = document.getElementById("o-email").textContent;
    }
  }

  /* autofill data */
  useEffect(() => {
    /* Autofill data */

    const aname = document.getElementById("i-name");
    const oname = document.getElementById("o-name");

    aname.addEventListener("input", function () {
      oname.textContent = aname.value;
      const inputText = aname.value;
      oname.textContent = inputText || "N/A";
    });

    const anic = document.getElementById("i-id");
    const onic = document.getElementById("o-id");

    anic.addEventListener("input", function () {
      onic.textContent = anic.value;
      const inputnic = anic.value;
      onic.textContent = inputnic || "N/A";
    });

    const aemail = document.getElementById("i-email");
    const oemail = document.getElementById("o-email");

    aemail.addEventListener("input", function () {
      oemail.textContent = aemail.value;
      const inputemail = aemail.value;
      oemail.textContent = inputemail || "N/A";
    });
    const aarea = document.getElementById("i-area");
    const oarea = document.getElementById("o-area");

    aarea.addEventListener("input", function () {
      oarea.textContent = aarea.value;
      const inputarea = aarea.value;
      oarea.textContent = inputarea || "N/A";
    });

    const aphone = document.getElementById("i-number");
    const ophone = document.getElementById("o-number");

    aphone.addEventListener("input", function () {
      ophone.textContent = aphone.value;
      const inputphone = aphone.value;
      ophone.textContent = inputphone || "N/A";
    });
  }, []);

  const location = useLocation();

  const { data, email } = location.state;

  const [currentImage, setCurrentImage] = useState(0);

  const Alert = () => {
    Swal.fire({
      title: "Pay Now",
      imageHeight: 200,
      imageAlt: "Pay now",
      html: `
                <div>
                    <p>Total Fee: $100</p>
                </div>

                <div style="border: 0.5px solid #000; box-shadow: 2px 2px 5px #888;">


                <span> Payment method </span>
                <div style="display: flex; align-items: center; margin: 15px;">

    <!-- First Image -->
    <div style="flex: 1; margin-right: 10px;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92TWlpRbMuSEnmRwo-AvxmsEq0Jf6JU8aeqyjjQ5ATLhkZJ6Ty6yKy5jlN87_Acn1Nhw&usqp=CAU" alt="Image 1" style="width: 100%; height: 70px; border-radius: 10px;">
    </div>

    <!-- Second Image -->
    <div style="flex: 1; margin-right: 10px;">
        <img src="https://www.echelon.lk/wp-content/uploads/2019/08/banner-image__0017_Advertorial_Sampath-Vishwa.jpg" alt="Image 2" style="width: 100%; height: 70px; border-radius: 10px;">
    </div>

    <!-- Third Image -->
    <div style="flex: 1;">
        <img src="https://s3.amazonaws.com/bizenglish/wp-content/uploads/2021/01/07105102/SLTMOBITEL-logo.jpg" alt="Image 3" style="width: 100%; height: 70px; border-radius: 10px;">
    </div>

</div>
            

                </div>

</br> </br>
                <div>

                <span> Term and Conditions </span>

                <hr>

                <span?> Please Review Carefully ! </span?




                <div style="overflow: auto; height: 200px; scrollbar-width: thin; scrollbar-color: blue #f0f0f0; direction: rtl;">
                <ul style="list-style-type: circle; padding: 0; margin: 0; text-align: left;">
                    <li>The booking fee charged by e-channeling is non-refundable</li>
                    <li>In the event of cancellation done by the institute</li>
                    <li>No refunds for cancellations under my circumstances</li>
                    <!-- Add more list items as needed -->
                </ul>

            </div>

            <hr>



<div>
<input type="checkbox" id="termsCheckbox"> I agree to the terms and conditions


</div>
                

                </div>

                
               
            `,
      confirmButtonText: "Proceed to Payment",
      confirmButtonColor: "#3085d6",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      reverseButtons: true,
      customClass: {
        container: "custom-swal-container",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const termsCheckbox = document.getElementById("termsCheckbox");
        if (termsCheckbox.checked) {
          const sendname = document.getElementById("i-name").value;
          const sendid = document.getElementById("o-id").textContent;
          const sendphoneNumber =
            document.getElementById("o-number").textContent;
          const sendemail = document.getElementById("o-email").textContent;

          const numberOfPatients =
            document.querySelector(".p-numbers").textContent;

          const paymentData = {
            name: sendname,
            id: sendid,
            phoneNumber: sendphoneNumber,
            email: sendemail,
            numberOfPatients: numberOfPatients,
            drName: data.name,
            date: data.day,
            getEmail: email,
          };

          navigate("/py", { state: { paymentData } });

          window.location.href = "/py";
        } else {
          Swal.fire(
            "Payment Error",
            "Please accept the terms and conditions.",
            "error"
          );
        }
      }
    });
  };

  return (
    <>
     
      <div className="new-all-content">
        <div className="n-left">
          <div className="n-left-up">
            <div className="n-profile">
              <div className="upper-border">
                <span className="n-profile-title">Profile.. </span>
              </div>

              <div className="n-contains">
                <div className="n-docenter">
                  <div className="n-imageadds">
                    {data.imagedata && (
                      <img
                        src={`data:image/jpeg;base64,${data.imagedata}`}
                        alt="Doctor"
                        className="n-imageadd"
                      />
                    )}
                  </div>

                  <div className="n-drname">
                    {" "}
                    {data.name} {data.email}
                  </div>
                  <div className="n-drname">{data.specialists}</div>
                </div>

                <div className="n-others">
                  <span className="n-other">
                    Hospital Name :{data.hospital}
                  </span>{" "}
                  <br />
                  <span className="n-other">Reg No : {data.regNo}</span> <br />
                  <span className="ot">
                    No of Patients :{" "}
                    <span className="p-numbers">{patientCount}</span>
                  </span>{" "}
                  <br />
                  <div>
                    <br />
                 

                    <button
        type="button"
        className="btn btn-outline-success"
        style={{ padding: "10px", margin: "10px" }}
        onClick={go}
      >
        {" "}
        <IoIosArrowBack />
        Back
      </button>



                 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="n-left-down">
            <div className="logo-ads">
              <div className="error-limit">
                <h4 className="er-h">Note from hospital</h4>
                <span className="er-s">
                  Appoinment limited for only 55 patient{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="n-center">
          <div className="f-border">
            <span className="n-profile-title">
              Chennel your doctor to fill this we want best servides{" "}
            </span>
            <br />
            <span className="n-profile-title">
              Become an eChannelling member and enjoy the benefits/Rewards.
            </span>
          </div>

          <div className="n-form">
            <span className="fill">Fill Form</span>

            <div className="new-f-content">
              <div className="n-f-name">
                <div className="n-title">
                  <div className="t-up">
                    <span className="n-name" id="er-red">
                      Title
                    </span>
                  </div>
                  <div className="t-down">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="1">Mr</option>
                      <option value="2">Mrs</option>
                    </select>
                  </div>
                </div>

                <div className="n-inputs">
                  <div className="t-up">
                    <span className="n-name">Patient Name * </span>

                    {nameError && <span className="er-red">{nameError}</span>}
                  </div>
                  <div className="t-down">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        id="i-name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="n-inp">
                <span className="n-n">Phone Number * </span>
                {phoneNumberError && (
                  <span className="er-red">{phoneNumberError} </span>
                )}
                {length && <span className="er-red"> {length}</span>}

                <div class="input-group mb-3">
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="i-number"
                    maxLength="10"
                    onInput={(e) => {
                      e.target.value = Math.max(
                        0,
                        parseInt(e.target.value) || 0
                      )
                        .toString()
                        .slice(0, 10);
                    }}
                  />
                </div>
              </div>

              <div className="n-inp">
                <span className="n-name">Email * </span>
                {emailError && <span className="er-red">{emailError}</span>}

                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="i-email"
                  />
                </div>
              </div>

              <div className="n-inp">
                <span className="n-name">Area</span>

                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="i-area"
                  />
                </div>
              </div>

              <div className="n-inp">
                <span className="n-n">Nic Number * </span>
                {niccError && <span className="er-red">{niccError}</span>}

                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="i-id"
                  />
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>

        <div className="n-right">
          <div className="n-right-up">
            <span className="n-h-p">Patient details</span>
            <br />
            <br />
            <div className="patient-details">
              <div>
                <span className="p-d-n">Name</span> <br />
                <lable className="d-l" id="o-name">
                  N/A
                </lable>
              </div>

              <div className="dt">
                <span className="p-d-n">Nic</span>
                <br />
                <lable className="d-l" id="o-id">
                  N/A
                </lable>
              </div>

              <div className="dt">
                <span className="p-d-n">Phone No</span> <br />
                <lable className="d-l" id="o-number">
                  N/A
                </lable>
              </div>

              <div className="dt">
                <span className="p-d-n">Email</span> <br />
                <lable className="d-l" id="o-email">
                  N/A
                </lable>
              </div>

              <div className="dt">
                <span className="p-d-n">Area</span> <br />
                <lable className="d-l" id="o-area">
                  N/A
                </lable>
              </div>
            </div>
          </div>

          <div className="n-right-down">
            <div className="n-p-d-content">
              <span className="n-h-p">Payment Details</span> <br /> <br />
              <div className="payment-cost">
                <div className="c-left">
                  <span className="cost-details">Doctor Fee</span>
                  <span className="cost-details">Hospital Fee</span>
                  <span className="cost-details">Channeling Fee</span>
                  <span className="cost-total">Total Fee</span>
                </div>
                <div className="c-right">
                  <span className="cost-details">Rs 2500</span>
                  <span className="cost-details">Rs 1500</span>
                  <span className="cost-details"> Rs300</span>
                  <span className="cost-total">Rs 4300</span>
                </div>
              </div>
              <div className="payment-button">
                <input
                  type="submit"
                  value="Payment"
                  className="p-btn"
                  onClick={Validate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

   <NewFooter/>
    </>
  );
}
