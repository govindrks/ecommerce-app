import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems); // Get wishlist items from Redux


  // Calculate total items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalWishlistItems = wishlistItems.length;


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Nishant Shopee
        </Link>
      </div>
       
      <div className="navbar-right">
        {/* Wishlist Icon */}
        <Link to="/wishlist" className="wishlist-link">
          <FaHeart size={24} />
          {totalWishlistItems > 0 && (
            <span className="wishlist-count">{totalWishlistItems}</span>
          )}
        </Link>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
