"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <nav className="bg-red-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">RedCart</h1>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/wishlist">Wishlist</Link>
        <Link href="/cart" className="relative flex items-center">
          <ShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
