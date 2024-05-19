import "./payment.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const [cvnNumber, setCvnNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvnError, setCVNError] = useState("");

  const [selectedCardType, setSelectedCardType] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [cardTypeError, setCardTypeError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const [cardVerifyError, setVerifyError] = useState("");
const navigate = useNavigate();
  function validation() {
   // alert("validation check ");

    if (!cardNumber) {
      setCardNumberError("Card Number is required");
    } else {
      setCardNumberError("");
    }
    if (!cvnNumber) {
      setCVNError("CVN is required");
    } else {
      setCVNError("");
    }
    if (!selectedCardType) {
      setCardTypeError("Card Type is required");
    } else {
      setCardTypeError("");
    }

    if (cardNumber && cvnNumber && selectedCardType) {
      checkAccount();
    }

    async function checkAccount() {
     // alert(cvnNumber);

      const cardDetails = {
        cardNumber: cardNumber,
        cvnNumber: cvnNumber,
      };

      const response = await fetch("http://localhost:8000/api/validateCVN", {
        method: "POST",
        body: JSON.stringify(cardDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
       // alert("CVN validation successful");



       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Payment has been successfully',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate(-1); // This navigates back to the previous page.
      });

      
      

     

        console.log(result);

        store();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "CVN validation failed !",
        });

      
      }
    }
  }

  /*
function Alert(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })


}*/


async function cancel(){
  navigate(-1);

}

  async function store() {
   // alert(paymentData.date);



    const titleText = "Your Appointment Number: ";
const title = titleText + incrementedNumberOfPatients;
    try {
      const item = {
        patient: paymentData.name,
        doctor: paymentData.drName,
        date: paymentData.date,
        number: paymentData.phoneNumber,
        email: paymentData.email,
        nic: paymentData.id,
        appointmentNumber: incrementedNumberOfPatients,
        getEmail: paymentData.getEmail,
      };

      const response = await fetch("http://localhost:8000/api/store", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Data stored successfully.");
      } else {
        console.error("Failed to store data. Status code:", response.status);
      }

      const emailInfo = {
        email: paymentData.email,
        title: title,
        body: "Email Body Content",
      };

      const emailResponse = await fetch("http://localhost:8000/api/send", {
        method: "Post",
        body: JSON.stringify(emailInfo),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (emailResponse.ok) {
        console.log("Email sent successfully.");
      } else {
        console.error(
          "Failed to send email. Status code:",
          emailResponse.status
        );
      }
    } catch (error) {
      console.error("Error during data storage:", error);
    }
  }

  const location = useLocation();
  const { paymentData } = location.state;

  const [sct, setSct] = useState("");
  const [scn, setScn] = useState("");
  const [scm, setScm] = useState("");
  const [scy, setScy] = useState("");
  const [scvnn, setScvnn] = useState("");

  function payment() {}

  const sum = paymentData.numberOfPatients + 1;

  const ConvertNumberOfPatients = parseInt(paymentData.numberOfPatients, 10);

  const incrementedNumberOfPatients = ConvertNumberOfPatients + 1;

  return (
    <div className="pyament-page">
      <div class="container-fluid">
        <div className="chaneling-logo"></div>

        <div className="payment-details">
          <div className="payment-title">
            <span className="payment-detailss">Payment Details </span>
            <p className="ppp">
              {" "}
              Name: {paymentData.name}
              <br />
              Your Appointment Number :{incrementedNumberOfPatients}
            </p>

            <hr />
          </div>

          <div className="card-type">
            <div className="c-l">
              {cardTypeError && <span className="er-red">{cardTypeError}</span>}
              <br />
              <span>Card Type*</span>
            </div>
            <div className="c-r">
              <div className="vis">
                <img
                  src="https://logowik.com/content/uploads/images/219_visa.jpg"
                  alt=""
                  className="img-type"
                />

                <div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked={selectedCardType === "Visa"}
                      onChange={() => setSelectedCardType("Visa")}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Visa
                    </label>
                  </div>
                </div>
              </div>
              <div className="master">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/200px-MasterCard_early_1990s_logo.svg.png"
                  alt=""
                  className="img-type"
                />

                <div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked={selectedCardType === "Master"}
                      onChange={() => setSelectedCardType("Master")}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Master
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-number">
            <div className="n-l">
              {cardNumberError && (
                <span className="er-red">{cardNumberError}</span>
              )}
              <br />
              <span>Card Number * </span>
            </div>
            <div className="n-r">
              <div class="input-group mb-3">
                <input
                  id="card"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(e) => setCardNumber(e.target.value)}
                  value={cardNumber}
                />
              </div>
            </div>
          </div>

          <div className="expire">
            <div className="e-l">
              <span>Expire Month </span>
            </div>

            <div className="m-select">
              <select class="form-select" aria-label="Default select example">
                {" "}
                <option value="">Month</option>
                <option value="">January</option>
                <option value="">February</option>
                <option value="">march</option>
                <option value="">April</option>
                <option value="">May</option>
                <option value="">June</option>
                <option value="">July</option>
                <option value="">August</option>
                <option value="">September</option>
                <option value="">Octomber</option>
                <option value="">November</option>
                <option value="">December</option>
              </select>
            </div>
            <div className="e-r">
              <div>
                <span>Expire Year </span>
              </div>

              <div className="m-selecter">
                <select class="form-select" aria-label="Default select example">
                  <option selected>2023</option>
                  <option value="1">2024</option>
                  <option value="2">2025</option>
                  <option value="3">2026</option>
                  <option value="3">2027</option>
                  <option value="3">2028</option>
                  <option value="3">2029</option>
                  <option value="3">2030</option>
                </select>
              </div>
            </div>
          </div>

          <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            This code is a three or four digit number printed on the back or
            front of credit cards.
          </div>

          <div className="cvn">
            <div className="cvn-l">
              {cvnError && <span className="er-red">{cvnError}</span>}
              <br />
              <span>CVN * </span>
            </div>
            <div className="cvn-r">
              <div class="input-group mb-3">
                <input
                  id="cvn"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={(e) => setCvnNumber(e.target.value)}
                  value={cvnNumber}
                />
              </div>{" "}
            </div>
          </div>

          <button className="btn-cancel" onClick={cancel}>
            Cancel
          </button>
        </div>
        <button className="green-btn" onClick={validation}>
          Pay
        </button>
      </div>
    </div>
  );
}
