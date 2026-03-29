// src/pages/Payment.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Payment() {
  const { user } = useAuth();
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Total amount from query params or fallback to 0
  const [total, setTotal] = useState(0);

  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // Get total from query string
    const params = new URLSearchParams(location.search);
    const amount = params.get("amount");
    setTotal(amount ? parseInt(amount) : 0);
  }, [location.search]);

  const handlePayment = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to make the payment");
      navigate("/login");
      return;
    }

    if (!cardNumber || !cvv || !expiry || !name) {
      alert("Please fill all card details");
      return;
    }

    // Simple validation
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      alert("Enter a valid 16-digit card number");
      return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
      alert("Enter a valid 3-digit CVV");
      return;
    }

    alert(`Payment of ₹${total} successful!`);
    clearCart(); // Empty cart after successful payment
    navigate("/"); // Redirect to home
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Payment Page</h2>
      <p className="mb-4 text-lg font-semibold">Total Amount: ₹{total}</p>

      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Card Number</label>
          <input
            type="text"
            maxLength={16}
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full border px-3 py-2 rounded outline-none"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-semibold">Expiry</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full border px-3 py-2 rounded outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-semibold">CVV</label>
            <input
              type="text"
              maxLength={3}
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full border px-3 py-2 rounded outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Card Holder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}