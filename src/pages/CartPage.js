import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleKeepShopping = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <Cart />
      ) : (
        <div>
          <p>Your cart is empty. Start shopping now!</p>
          <button onClick={handleKeepShopping}>Keep Shopping</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
