import React, { useState } from "react";

const CustomAlert = ({ onClose }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleAgreeChange = () => {
    setAgreed(!agreed);
  };

  const handlePaymentProcess = () => {
    if (agreed && selectedPaymentMethod) {
      // You can implement the payment processing logic here
      // For this example, we'll just close the alert
      onClose();
    } else {
      alert('Please select a payment method and agree to the conditions.');
    }
  };

  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>Payment Alert</h2>
        <label>
          Select Payment Method:
          <select value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Select</option>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <label>
          <input type="checkbox" checked={agreed} onChange={handleAgreeChange} />
          I agree to the conditions
        </label>
        <button onClick={handlePaymentProcess}>Process Payment</button>
      </div>
    </div>
  );
};

export default CustomAlert;
