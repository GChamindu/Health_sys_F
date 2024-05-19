import "./newRegister.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function NewRegister() {
  const [nameError, setCheckNameError] = useState("");
  const [emailError, setCheckEmailError] = useState("");
  const [passwordError, setCheckPasswordError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  async function storeData() {
    // alert(name);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    let result = await fetch("http://localhost:8000/api/contact", {
      method: "POST",
      body: formData,
    });
    /*  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>*/
    //navigate("/home", { userData: { name, profile } });

    if (result.status === 400) {
      const errorResponse = await result.json();
      setError("" + errorResponse.error);
      // alert("email is use");
    } else {
      setError("");
      localStorage.setItem("user-info", result);
      navigate("/", { state: { userData: { name, email } } });
    }

    console.warn("result", result);
  }

  function validate() {
    if (!name) {
      setCheckNameError("Name field is require");
    } else {
      setCheckNameError("");
    }

    if (!email) {
      setCheckEmailError("Email field is require");
    } else {
      setCheckEmailError("");
    }

    if (!password) {
      setCheckPasswordError("Password field is require");
    } else {
      setCheckPasswordError("");
    }

    if (name && password && email) {
      storeData();
    }
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    validate();
  };

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="new_Register_page">
        <div className="new_register_left">
          <Link to="./" className="back_btn_link">
            <div className="back_home_btn">
              <span className="back_span">
                <IoIosArrowBack /> Back to home
              </span>
            </div>
          </Link>
          <div className="logo_left">....</div>
          <div className="para_left">
            <span className="para">
              Become a premium member and enjoy a 15% reduction on your ECL
              service fee.
            </span>
          </div>

          <div className="new_left_register_image">
            <img src="" alt="" className="reg_img" />
          </div>
        </div>

        <div className="new_register_right">
          <div className="right_form_content">
            <div className="header_left">
              {" "}
              <h3 className="welcome">Welcome</h3>
              <span className="link_register">Already have account </span>
              <Link to="/nl" className="next_login">
                Sign in
              </Link>
            </div>
            <br />
            <br />
            <div className="form_content_left">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="name_content">
                  <Form.Group as={Col} md="10" controlId="validationCustom02">
                    <Form.Label className="label_color">Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Name"
                      defaultValue=""
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <br />
                </div>
                <div className="email_content">
                  <Form.Group as={Col} md="10" controlId="validationCustom03">
                    <Form.Label className="label_color">Email</Form.Label>

                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      defaultValue=""
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <span className="error-email-set">{error} </span>
                  </Form.Group>
                </div>
                <br />
                <div className="password_content">
                  <Form.Group as={Col} md="10" controlId="validationCustom03">
                    <Form.Label className="label_color">Password</Form.Label>

                    <Form.Control
                      type="password"
                      placeholder=""
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <Form.Control.Feedback type="invalid">
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      Please provide a Password.
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <br />
                <div className="button_right_content">
                  <br />

                  <Button type="submit" className="submit">
                    Sign up
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
