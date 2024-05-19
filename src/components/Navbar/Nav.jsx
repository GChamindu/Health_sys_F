import "./nav.css";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import logo from "./imges/logoimage.jpg";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Nav({ email }) {
  
  const modalRef = useRef(null);
    const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/");
  };

  function apo() {
    navigate("/appointment", { state: { userData: { email } } });
  }

  const [fName, setFName] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");

  const [fNameError, setFNameError] = useState(" ");
  const [subjectError, setSubjectError] = useState(" ");
  const [coemmentError, setCommentError] = useState(" ");

  function validate() {
    if (!fName) {
      setFNameError("Please enter name !!");
    } else {
      setFNameError("");
    }
    if (!subject) {
      setSubjectError("Enter your subject");
    } else {
      setSubjectError("");
    }
    if (!comment) {
      setCommentError("Enter your comment");
    }

    if (fName && subject && comment) {
      alert("OK");
      submitFeedback();
    }

    async function submitFeedback() {
      alert(fName);

      const formData = new FormData();
      formData.append("name", fName);
      formData.append("subject", subject);
      formData.append("comment", comment);

      let result = await fetch("http://localhost:8000/api/feedback", {
        method: "POST",
        body: formData,
      });

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      result.json().then((res) => {
        alert("Data is send");
      });
      setFName("");
      setComment("");
      setSubject("");
     // localStorage.clear();
     


    }
  }



  function logOut(){
    localStorage.clear();
  }

 



  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef} 
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Feedback
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                onClick={() => {
                  setFName("");
                  setComment("");
                  setSubject("");
                }}
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <br />
              <h3 style={{ color: "#2c60dc", fontWeight: "bold" }}>
                Tell us what do you think
              </h3>
              <span style={{ color: "#283c4a", fontWeight: "10" }}>
                Please use this facility to send us your comments and thoughts
                on our service
              </span>
              <br />
              <br />
              <label
                for="inputPassword5"
                style={{ color: "#3b647e", fontWeight: "10" }}
              >
                Name
              </label>
              <input
                type="text"
                id="inputPassword5"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                onChange={(e) => setFName(e.target.value)}
                value={fName}
              />
              <br />
              <label
                for="inputPassword5"
                style={{ color: "#3b647e", fontWeight: "10" }}
              >
                Subject
              </label>
              <input
                type="name"
                id="inputPassword5"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <br /> <br />
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                ></textarea>
                <label
                  for="floatingTextarea2"
                  style={{ color: "#3b647e", fontWeight: "10" }}
                >
                  Comments
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={validate}
              >
                Send
              </button>
              <button type="button" class="btn btn-primary" onClick={logOut} data-bs-dismiss="modal">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="up">
          <h3 className="logoname"> Healthgrades</h3>
          <div className="contain">
            <span className="alink" onClick={apo}>
              {" "}
              My Appointments
            </span>

            {localStorage.getItem("user-info") ? (
              <>
                <button
                  type="button"
                  className="llink"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Log out
                </button>

                <Link to="/feedback"></Link>
              </>
            ) : (
              <>
                <Link to="/nl" className="llink">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="down"></div>
      </div>
    </>
  );
}
