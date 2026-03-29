// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Total price calculate
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Payment button handler
  const handleProceedPayment = () => {
    if (!user) {
      // Agar login nahi hai to login page bhejo aur wapas is page pe aane ka state bhejo
      navigate("/login", { state: { from: location } });
      return;
    }
    // Agar login hai to payment page
    navigate(`/payment?amount=${totalPrice}`);
  };

  // Agar cart empty hai
  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl mt-12">Your cart is empty</h2>
        <Link to="/" className="text-blue-500 text-black">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {/* Cart items */}
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center border-b py-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded mr-4"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p>Size: {item.selectedSize}</p>
            <p>Quantity: {item.quantity}</p>
            <p>
              Price: ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
            </p>
          </div>

          {/* Remove button */}
          <button
            className="bg-red-500 text-white px-3 py-1 rounded ml-4 hover:bg-red-600"
            onClick={() => removeFromCart(item.id, item.selectedSize)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total and proceed to payment */}
      <div className="flex justify-between items-center mt-6 p-4 border rounded bg-gray-50">
        <span className="text-xl font-bold">Total: ₹{totalPrice}</span>
        <button
          onClick={handleProceedPayment}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CartPage;