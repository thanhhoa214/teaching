"use client"

import { createContext } from "vm";

interface CartContextType {
    cartIds: number[];
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
}

export const CartInfoContext = createContext<CartContextType | null>(null);



