"use client";
import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

interface ProductCardProps {
  product: Product;
  onWishlistToggle: (id: number) => void;
  onAddToCart: (id: number) => void;
  isWishlisted: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onWishlistToggle, onAddToCart, isWishlisted }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="bg-black text-white p-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
      <div className="relative">
        <Image
          src={product.images[currentImage]}
          alt={product.title}
          width={300}
          height={200}
          className="rounded-lg object-cover w-full h-40"
        />
        <button
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isWishlisted ? "bg-black text-red-500" : "bg-red-600 text-white"
          }`}
          onClick={() => onWishlistToggle(product.id)}
        >
          <Heart fill={isWishlisted ? "black" : "transparent"} />
        </button>
      </div>
      <h2 className="mt-3 text-lg font-semibold">{product.title}</h2>
      <p className="text-red-500 font-bold text-xl">₹{product.price}</p>
      <button
        onClick={() => onAddToCart(product.id)}
        className="bg-red-600 hover:bg-red-700 text-white w-full py-2 mt-2 rounded-lg flex items-center justify-center gap-2"
      >
        <ShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
