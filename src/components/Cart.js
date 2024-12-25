import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItem } from "../redux/actions/cartActions";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this item from the cart?");
    if (confirmRemove) {
      dispatch(removeFromCart(id));
    }
  };

  const handleUpdate = (id, quantity) => {
    dispatch(updateCartItem(id, Number(quantity)));
  };

  const handlePlaceOrder = () => {
    navigate("/order-success");
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-page">
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="item-image" />
                <p>{item.title}</p>
                <p>
                  <span className="original-price"> ${itemTotal.toFixed(2)}</span>
                </p>
                <div className="item-actions">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleUpdate(item.id, e.target.value)}
                  />
                  <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            );
          })}

          <div className="cart-total">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>

          <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
