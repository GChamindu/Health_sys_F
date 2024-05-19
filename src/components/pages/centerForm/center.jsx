import "./center.css";
import React, { useState } from "react";

const Center = () => {
  const [title, setTitle] = useState('Mrs');
  const [doctorName, setDoctorName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [idType, setIdType] = useState('NIC');
  const [idNumber, setIdNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
  };

  return (
    <div className="form-container">
      <h2>Doctor Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Title:</label>
          <select value={title} onChange={(e) => setTitle(e.target.value)}>
            <option value="Mrs">Mrs</option>
            <option value="Mr">Mr</option>
          </select>
        </div>
        <div className="input-group">
          <label>Doctor Name:</label>
          <input
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
          />
        </div>
        {/* Other input fields go here */}
        <div className="input-group">
          <button type="submit">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default Center;
