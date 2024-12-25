import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import './CartPage.css';


const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleKeepShopping = () => {
    navigate('/');
  };

  return (
    <div className="cart-page">
  <Navbar />
  <h1>Your Shopping Cart</h1>
  {cartItems.length > 0 ? (
    <div className="cart-content">
      <Cart />
    </div>
  ) : (
    <div className="cart-content empty-cart">
      <p>Your cart is empty. Start shopping now!</p>
      <button onClick={handleKeepShopping}>Keep Shopping</button>
    </div>
  )}
</div>

  );
};

export default CartPage;
