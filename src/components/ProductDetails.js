import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';
import Navbar from './Navbar';
import { addToWishlist } from '../redux/actions/wishlistActions';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams(); // Retrieve product ID from URL params

  // Fetch the product from the Redux store by matching productId
  const product = useSelector((state) =>
    state.products.items.find((prod) => prod.id === parseInt(productId)) // Ensure ID is compared correctly
  );

  // Fetch the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Check if the product is already in the cart
  //.some() –A JavaScript array method that tests whether at least one element in the array meets a specified condition.
  const isProductInCart = cartItems.some(item => item.id === product.id);

  // If product is not found, display a message
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!isProductInCart) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

const handleSaveLater = () => {
    dispatch(addToWishlist({ ...product, quantity: 1 }));
    navigate('/Wishlist');
}

  return (
    <div className="product-details">
        <Navbar />
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>
        {isProductInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
      {isProductInCart && (
        <button onClick={handleGoToCart}>Go to Cart</button>
      )}
      <button onClick={handleSaveLater}>Save for later</button>
    </div>
  );
};

export default ProductDetails;
