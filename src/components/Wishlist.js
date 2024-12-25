import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, updateWishlistItem } from "../redux/actions/wishlistActions";
import { addToCart } from "../redux/actions/cartActions"; // Assuming you have an addToCart action
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
// import './Wishlist.css';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist?.wishlistItems || []);
  const cartItems = useSelector((state) => state.cart.cartItems);  // Fetch cart items from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Navigate to the product details page
  const handleViewProduct = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  // Remove item from wishlist
  const handleRemoveFromWishlist = (productId) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this item from the Wishlist?");
    if (confirmRemove) {
    dispatch(removeFromWishlist(productId));
    }
  };

  // Update wishlist item quantity
  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity > 0) {
      dispatch(updateWishlistItem(productId, quantity));
    }
  };

  // Navigate to the shop page
  const handleShopMore = () => {
    navigate('/');
  };

  // Add item to the cart and remove from wishlist if it's not already in the cart
  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.some(item => item.id === product.id);
    if (!isProductInCart) {
      dispatch(addToCart({ ...product, quantity: 1 })); // Add product to cart
      dispatch(removeFromWishlist(product.id));  // Remove from wishlist once added to cart
    }
  };

  // Navigate to the cart page
  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="wishlist-page">
      <Navbar />
      <h2>Your Wishlist</h2>
      
      {/* Display wishlist items or a message if it's empty */}
      {wishlistItems.length > 0 ? (
        <div className="wishlist-container">
          {wishlistItems.map((product) => {
            const isProductInCart = cartItems.some(item => item.id === product.id); // Check if product is in the cart
            
            return (
              <div key={product.id} className="wishlist-item">
                <img
                  src={product.image}
                  alt={product.title}
                  onClick={() => handleViewProduct(product.id)} // Navigate to product details
                />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <div className="item-actions">
                  <input
                    type="number"
                    value={product.quantity || 1}  // Ensure value for quantity
                    min="1"
                    onChange={(e) => handleUpdateQuantity(product.id, Number(e.target.value))}  // Update quantity
                  />
                  <button onClick={() => handleRemoveFromWishlist(product.id)}>
                    <FaTrash /> Remove
                  </button>
                  <button onClick={() => handleAddToCart(product)}>
                    {isProductInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                  {isProductInCart && (
                    <button onClick={handleGoToCart}>Go to Cart</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Your wishlist is empty</p>  // Display a message if wishlist is empty
      )}

      <div className="shop-more-btn">
        <button onClick={handleShopMore}>Shop More</button>
      </div>
    </div>
  );
};

export default Wishlist;
