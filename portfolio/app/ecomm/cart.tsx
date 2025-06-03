"use client";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useItems } from "./useItems";

export default function Cart() {
  const cartInfo = useContext(CartContext);
  const items = useItems() // get full product data

  // map cartItems to full product information
  const detailedCartInfo = cartInfo?.cartItems.map((cartItem) => {
    const products = items.find((item) => item.id === cartItem.productId)
    return {
      ...cartItem,
      ...products
    }
  })

  return (
    <div>
      <h2 className="font-bold m-2">Cart Information</h2>
      <ul>
        {detailedCartInfo?.length ? (
        detailedCartInfo.map((item) => {
        return (
          <li key={item.id}>
              <div className="flex items-center">
                <img src={item.image} alt={item.item} className="w-10 h-10 mr-2" />
              
            <p>{item.item} | quantity: {item.quantity}</p>
            </div>
          </li>
        );
      })
    ) : (
      <span>It is empty right now</span>
  )}
</ul>

    </div>
  );
}
