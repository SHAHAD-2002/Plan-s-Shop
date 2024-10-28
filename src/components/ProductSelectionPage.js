import React from 'react';
import './ProductSelectionPage.css';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  
  const products = [
    { id: 1, name: 'Air Purifying Plant', price: 10, image: ('../assest/plant 1.png') },
    { id: 2, name: 'Green Foliage', price: 15, image: ('../assest/plant 2.png') },
    { id: 3, name: 'Flowering Plant', price: 20, image: ('../assest/plant 3.png' )},
    // Add more products as needed
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-listing">
      <h1>Our Plants</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;