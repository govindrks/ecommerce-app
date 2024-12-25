import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // Navigate to the product details page
    navigate(`/product-details/${product.id}`); // Assuming you want to pass the product ID to the details page
  };

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title} 
        onClick={handleImageClick} // Clicking the image navigates to the product details page
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
