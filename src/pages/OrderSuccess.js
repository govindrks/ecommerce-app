import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { clearCart } from "../redux/actions/cartActions";
//import { clearCart } from "../redux/cartActions"; // Import the clearCart action

const OrderSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear the cart when the order is placed successfully
    dispatch(clearCart());
  }, [dispatch]);

  const handleKeepShopping = () => {
    navigate('/');
  };

  return (
    <div className="order-success">
      <Navbar />
      <h1>Your order has been placed successfully!</h1>
      <p>Thank you for your purchase. You will receive an email with the order details.</p>
      <button onClick={handleKeepShopping}>Keep Shopping</button>
    </div>
  );
};

export default OrderSuccess;
