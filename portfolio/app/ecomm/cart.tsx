"use client";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const cartInfo = useContext(CartContext);

  return (
    <div>
      <h2>Cart Information</h2>
      <ul>
        {cartInfo?.cartItems.length ? (
          cartInfo?.cartItems.map((item) => (
            <li key={item.productId}>
              {item.productId}, quantity: {item.quantity}
            </li>
          ))
        ) : (
          <span>It is empty right now</span>
        )}
      </ul>
    </div>
  );
}
