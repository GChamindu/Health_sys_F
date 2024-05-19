import React from "react";
import { useLocation } from "react-router-dom";

export default function Send() {
    const queryParams = new URLSearchParams(location.search);

    const name = queryParams.get('sendname');
    const id = queryParams.get('sendid');
    const phoneNumber = queryParams.get('sendphoneNumber');
    const email = queryParams.get('sendemail');
    const area = queryParams.get('sendarea');



  const location = useLocation();
  const {
    sendname,
    sendid,
    sendphoneNumber,
    sendemail,
    sendarea,
    totalCost,
    numberOfPatients,
  } = location.state;



  return (
    <div>
    <h1>Payment Details</h1>
    <p>Name: {sendname}</p>
    <p>ID: {sendid}</p>
    <p>Phone Number: {sendphoneNumber}</p>
    <p>Email: {sendemail}</p>
    <p>Area: {sendarea}</p>
    <p>Total Cost: {totalCost}</p>
    <p>Number of Patients: {numberOfPatients}</p>
    {/* Add your payment-related content here */}
  </div>
  )
}
