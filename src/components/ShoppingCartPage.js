import React from 'react';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity } = useSelector(state => state.cart);

  return (
    <div className="shopping-cart">
      <h1>Your Shopping Cart</h1>
      <p>Total Items: {totalQuantity}</p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;