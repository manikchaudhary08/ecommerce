"use client";
import { useState } from "react";
import products from "@/app/data/product";
import Navbar from "@/app/components/navbar";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(products.filter((p) => p.isWishlisted));

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <Navbar cartCount={0} />
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} className="p-4 border-b border-gray-700">
            <p>{item.title} - ₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
