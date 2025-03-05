"use client";
import { useState } from "react";
import Navbar from "@/app/components/navbar";
import FilterBar from "@/app/components/filterBar";
import ProductCard from "@/app/components/productCard";
import productsData from "@/app/data/product";

const HomePage = () => {
  const [products, setProducts] = useState(productsData);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState<"lowToHigh" | "highToLow" | null>(null);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  const handleSortChange = (order: "lowToHigh" | "highToLow") => {
    setSortOrder(order);
    const sortedProducts = [...products].sort((a, b) => {
      return order === "lowToHigh" ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar cartCount={cart.length} />
      <div className="p-6">
      <FilterBar onSortChange={handleSortChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onWishlistToggle={toggleWishlist}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
