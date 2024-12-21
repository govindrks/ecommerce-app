import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItem } from "../redux/actions/cartActions";
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdate = (id, quantity) => {
    dispatch(updateCartItem(id, quantity));
  };

  return (
    <div className="cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleUpdate(item.id, e.target.value)}
          />
          <button onClick={() => handleRemove(item.id)}>
            <FaTrash /> Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
