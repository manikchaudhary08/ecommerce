"use client";
import { useState } from "react";
import products from "@/app/data/product";
import Navbar from "@/app/components/navbar";

const Cart = () => {
  const [cart, setCart] = useState(products.map((p) => ({ ...p, quantity: 1 })));

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <Navbar cartCount={cart.length} />
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center p-4 border-b border-gray-700">
          <p>{item.title}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            className="text-black w-12 p-1"
          />
          <p className="text-red-500 font-bold">₹{item.price * item.quantity}</p>
        </div>
      ))}
      <h2 className="text-2xl font-bold mt-6">Total: ₹{total}</h2>
    </div>
  );
};

export default Cart;
