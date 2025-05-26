"use client";

import { createContext } from "react";

export interface CartContextType {
  cartItems: { productId: number; quantity: number }[];
  //   cartInfo: Array<{ id: number; quantity: number }>;
  addToCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);
