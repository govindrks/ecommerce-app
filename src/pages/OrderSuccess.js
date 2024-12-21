import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
    const navigate = useNavigate();

    const handleKeepShopping = () => {
        navigate('/');
      };
  return (
    <div className="order-success">
      <h1>Your order has been placed successfully!</h1>
      <p>Thank you for your purchase. You will receive an email with the order details.</p>
      <button onClick={handleKeepShopping}>Keep Shopping</button>
    </div>
  );
};

export default OrderSuccess;
