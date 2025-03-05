"use client";
import { useParams } from "next/navigation";
import products from "@/app/data/product";
import Image from "next/image";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p className="text-white">Product not found</p>;

  return (
    <div className="text-white p-6">
      <Image src={product.images[0]} alt={product.title} width={500} height={400} />
      <h1 className="text-2xl">{product.title}</h1>
      <p className="text-red-500 text-xl">₹{product.price}</p>
    </div>
  );
};

export default ProductPage;
